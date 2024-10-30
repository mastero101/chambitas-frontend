import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { Professional } from '@core/models/professional.interface';
import { ChatComponent } from '../../chat/chat.component';
import { CalendarComponent } from '../calendar/calendar.component';

interface Servicio {
  nombre: string;
  precioBase: number;
  descripcion: string;
  caracteristicas: string[];
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    ChatComponent,
    CalendarComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  professional: Professional | null = null;
  showChat = false;
  mostrandoCalendario = false;

  constructor(
    private location: Location,
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.professional = navigation.extras.state['professional'];
    }
  }

  ngOnInit(): void {
    if (!this.professional) {
      this.router.navigate(['/search']);
      return;
    }
    
    // Inicializar servicios de ejemplo si no existen
    this.professional.servicios = this.professional.servicios || [
      {
        nombre: 'Servicio Básico',
        precioBase: 100,
        descripcion: 'Servicio estándar con características básicas',
        caracteristicas: ['Característica 1', 'Característica 2']
      }
      // Puedes agregar más servicios aquí
    ];
  }

  goBack(): void {
    this.location.back();
  }

  iniciarChat(): void {
    this.showChat = true;
  }

  onChatClose() {
    this.showChat = false;
  }

  dejarMensaje(): void {
    // Aquí irá la lógica para dejar un mensaje
    console.log('Abriendo formulario de mensaje para:', this.professional?.name);
  }

  verMasResenas(): void {
    // Implementar lógica para cargar más reseñas
    console.log('Cargando más reseñas...');
  }

  solicitarServicio(servicio: Servicio) {
    // Implementar lógica para solicitar el servicio
    console.log('Servicio solicitado:', servicio);
  }

  mostrarCalendario(): void {
    this.mostrandoCalendario = true;
  }

  cerrarCalendario(): void {
    this.mostrandoCalendario = false;
  }

  confirmarCita(evento: {fecha: Date, hora: string}): void {
    console.log('Cita confirmada:', evento);
    // Aquí implementarías la lógica para guardar la cita
    this.cerrarCalendario();
  }
}
