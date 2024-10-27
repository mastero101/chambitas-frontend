import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Service {
  name: string;
  description: string;
  icon: string;
  category?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  mainServices: Service[] = [
    {
      name: 'Carpintería',
      description: 'Trabajos en madera, muebles a medida y reparaciones',
      icon: 'fas fa-hammer',
      category: 'construccion'
    },
    {
      name: 'Albañilería',
      description: 'Construcción, reformas y trabajos en mampostería',
      icon: 'fas fa-hard-hat',
      category: 'construccion'
    },
    {
      name: 'Electricidad',
      description: 'Instalaciones y reparaciones eléctricas certificadas',
      icon: 'fas fa-bolt',
      category: 'instalaciones'
    },
    {
      name: 'Plomería',
      description: 'Reparación e instalación de sistemas de agua y gas',
      icon: 'fas fa-faucet',
      category: 'instalaciones'
    },
    {
      name: 'Mecánica',
      description: 'Reparación y mantenimiento de vehículos',
      icon: 'fas fa-wrench',
      category: 'vehiculos'
    },
    {
      name: 'Aires Acondicionados y Refrigeración',
      description: 'Instalación, reparación y mantenimiento de sistemas de climatización y refrigeración',
      icon: 'fas fa-snowflake',
      category: 'instalaciones'
    }
  ];
}
