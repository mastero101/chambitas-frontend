import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Professional } from '@core/models/professional.interface';
import { User } from '@core/models/user.interface';
import { PROFESSIONALS } from '@core/data/professionals.data';
import { CURRENT_USER } from '@core/data/user.data';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  currentUser: User = CURRENT_USER;
  recentServices = [
    {
      id: 1,
      professionalName: 'Carlos Gómez',
      service: 'Instalación eléctrica',
      date: '2024-03-25',
      status: 'pendiente',
      imageUrl: 'assets/images/electricista.webp'
    },
    {
      id: 2,
      professionalName: 'Juan Pérez',
      service: 'Reparación de muebles',
      date: '2024-03-20',
      status: 'en-proceso',
      imageUrl: 'assets/images/carpintero.webp'
    },
    {
      id: 3,
      professionalName: 'Jaime López',
      service: 'Reparación de tubería',
      date: '2024-03-15',
      status: 'completado',
      imageUrl: 'assets/images/plomero.webp'
    }
  ];

  favoritesProfessionals = PROFESSIONALS.slice(0, 3);
}
