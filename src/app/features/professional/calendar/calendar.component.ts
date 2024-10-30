import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { Professional } from '@core/models/professional.interface';
import { Reservacion } from '@core/models/reservacion.interface';

interface CitaOcupada {
  fecha: Date;
  hora: string;
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {
  @Input() professional!: Professional;
  @Input() disponibilidad: any = {};
  @Input() citasOcupadas: CitaOcupada[] = [];
  @Output() cerrar = new EventEmitter<void>();
  @Output() seleccionCita = new EventEmitter<{fecha: Date, hora: string}>();
  @Output() reservacionConfirmada = new EventEmitter<Reservacion>();

  fechaSeleccionada: Date | null = null;
  horaSeleccionada: string | null = null;
  horasDisponibles: string[] = [];
  reservacionExitosa = false;

  // Horarios base
  private horariosBase: string[] = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ];

  filtrarDiasDisponibles = (fecha: Date | null): boolean => {
    if (!fecha) return false;
    
    // Verificar si la fecha está en citasOcupadas
    const estaOcupado = this.professional.disponibilidad.citasOcupadas
      .some(cita => {
        const citaFecha = new Date(cita.fecha);
        return citaFecha.toDateString() === fecha.toDateString();
      });

    // Obtener el día de la semana (0-6, donde 0 es domingo)
    const dia = fecha.getDay();
    
    // Verificar si el día está en horariosDisponibles
    const esDiaDisponible = this.professional.disponibilidad.horariosDisponibles
      .some(horario => this.obtenerNumeroDia(horario.dia) === dia);

    return esDiaDisponible && !estaOcupado;
  }

  private obtenerNumeroDia(dia: string): number {
    const dias = {
      'domingo': 0,
      'lunes': 1,
      'martes': 2,
      'miércoles': 3,
      'jueves': 4,
      'viernes': 5,
      'sábado': 6
    };
    return dias[dia.toLowerCase() as keyof typeof dias];
  }

  obtenerHorasDisponibles(fecha: Date): string[] {
    const diaSeleccionado = this.obtenerNombreDia(fecha.getDay());
    const horarioDelDia = this.professional.disponibilidad.horariosDisponibles
      .find(h => h.dia.toLowerCase() === diaSeleccionado);

    if (!horarioDelDia) return [];

    const horas = this.generarHorasEntre(horarioDelDia.horaInicio, horarioDelDia.horaFin);
    
    // Filtrar las horas que ya están ocupadas
    return horas.filter(hora => !this.estaHoraOcupada(fecha, hora));
  }

  private estaHoraOcupada(fecha: Date, hora: string): boolean {
    return this.professional.disponibilidad.citasOcupadas
      .some(cita => {
        const citaFecha = new Date(cita.fecha);
        return citaFecha.toDateString() === fecha.toDateString() && 
               cita.horaInicio === hora;
      });
  }

  private obtenerNombreDia(dia: number): string {
    const dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    return dias[dia];
  }

  private generarHorasEntre(inicio: string, fin: string): string[] {
    const horas: string[] = [];
    let horaActual = new Date(`2000-01-01T${inicio}`);
    const horaFin = new Date(`2000-01-01T${fin}`);

    while (horaActual < horaFin) {
      horas.push(horaActual.toLocaleTimeString('es-ES', { 
        hour: '2-digit', 
        minute: '2-digit' 
      }));
      horaActual.setMinutes(horaActual.getMinutes() + 30); // Intervalos de 30 minutos
    }

    return horas;
  }

  seleccionarHora(hora: string): void {
    this.horaSeleccionada = hora;
    this.reservacionExitosa = false; // resetear mensaje de éxito
  }

  confirmarReservacion() {
    if (!this.fechaSeleccionada || !this.horaSeleccionada) return;

    const nuevaReservacion: Reservacion = {
      fecha: this.fechaSeleccionada,
      horaInicio: this.horaSeleccionada,
      duracion: 60, // duración por defecto en minutos
      profesionalId: this.professional.id,
      estado: 'confirmada',
      servicio: 'Consulta', // puedes hacer esto configurable
      // otros campos necesarios...
    };

    try {
      // Emitir el evento para que el componente padre maneje la reservación
      this.reservacionConfirmada.emit(nuevaReservacion);
      
      // Actualizar el estado local
      this.professional.disponibilidad.citasOcupadas.push(nuevaReservacion);
      
      // Mostrar mensaje de éxito
      this.reservacionExitosa = true;
      
      // Resetear el formulario después de 2 segundos
      setTimeout(() => {
        this.fechaSeleccionada = null;
        this.horaSeleccionada = null;
        this.horasDisponibles = [];
        this.reservacionExitosa = false;
      }, 2000);

    } catch (error) {
      console.error('Error al guardar la reservación:', error);
      // Aquí podrías mostrar un mensaje de error
    }
  }

  fechaClass = (fecha: Date): string => {
    if (this.filtrarDiasDisponibles(fecha)) {
      return 'fecha-disponible';
    }
    return 'fecha-no-disponible';
  }

  ngOnInit() {
    this.fechaSeleccionada = new Date();
    this.horasDisponibles = this.obtenerHorasDisponibles(this.fechaSeleccionada);
  }

  onFechaSeleccionada(fecha: Date | null) {
    this.fechaSeleccionada = fecha;
    this.horaSeleccionada = null;
    
    if (fecha) {
      this.horasDisponibles = this.obtenerHorasDisponibles(fecha);
    } else {
      this.horasDisponibles = [];
    }
  }
}
