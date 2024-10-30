import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Service {
  id: string;
  service: string;
  professionalName: string;
  professionalImage: string;
  date: Date;
  status: 'pendiente' | 'en-proceso' | 'completado' | 'cancelado';
  price: number;
  description: string;
  location: string;
  category: string;
}

@Component({
  selector: 'app-recent-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recent-services.component.html',
  styleUrl: './recent-services.component.scss'
})
export class RecentServicesComponent implements OnInit {
  services: Service[] = [];
  
  ngOnInit() {
    // Aquí posteriormente conectaremos con el servicio real
    this.services = this.getMockServices();
  }

  private getMockServices(): Service[] {
    return [
      {
        id: '1',
        service: 'Reparación de Plomería',
        professionalName: 'Juan Pérez',
        professionalImage: '/assets/images/plomero.webp',
        date: new Date(),
        status: 'en-proceso',
        price: 150.00,
        description: 'Reparación de tubería en baño principal',
        location: 'Calle Principal #123',
        category: 'Plomería'
      },
      {
        id: '2',
        service: 'Instalación de Aire Acondicionado',
        professionalName: 'Carlos Gómez',
        professionalImage: '/assets/images/electricista.webp',
        date: new Date(),
        status: 'completado',
        price: 300.00,
        description: 'Instalación de sistema de aire acondicionado en vivienda',
        location: 'Calle Secundaria #456',
        category: 'Aire Acondicionado'
      },
      {
        id: '3',
        service: 'Reparación de Electrodomésticos',
        professionalName: 'Ana Rodríguez',
        professionalImage: '/assets/images/refrigeracion.webp',
        date: new Date(),
        status: 'pendiente',
        price: 100.00,
        description: 'Reparación de nevera en mal funcionamiento',
        location: 'Avenida Principal #789',
        category: 'Electrodomésticos'
      },
      {
        id: '4',
        service: 'Limpieza de Ductos',
        professionalName: 'Juan Carlos',
        professionalImage: '/assets/images/albañil.webp',
        date: new Date(),
        status: 'en-proceso',
        price: 250.00,
        description: 'Limpieza de ductos de aire acondicionado',
        location: 'Calle Tercera #101',
        category: 'Limpieza'
      }
    ];
  }

  getStatusClass(status: 'pendiente' | 'en-proceso' | 'completado' | 'cancelado'): string {
    const classes = {
      'pendiente': 'bg-yellow-100 text-yellow-700 ring-1 ring-yellow-700/10',
      'en-proceso': 'bg-blue-100 text-blue-700 ring-1 ring-blue-700/10',
      'completado': 'bg-green-100 text-green-700 ring-1 ring-green-700/10',
      'cancelado': 'bg-red-100 text-red-700 ring-1 ring-red-700/10'
    };
    return classes[status] || '';
  }
}
