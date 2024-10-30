export interface Disponibilidad {
  horariosDisponibles: HorarioDisponible[];
  citasOcupadas: CitaOcupada[];
}

export interface HorarioDisponible {
  dia: string;        // 'lunes', 'martes', etc.
  horaInicio: string; // '09:00'
  horaFin: string;    // '18:00'
}

export interface CitaOcupada {
  fecha: Date;
  horaInicio: string;
  duracion: number;   // en minutos
  servicio: string;
  estado: 'confirmada' | 'pendiente' | 'cancelada';
}