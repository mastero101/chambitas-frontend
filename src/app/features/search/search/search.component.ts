import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Professional {
  id: number;
  name: string;
  profession: string;
  location: string;
  rating: number;
  imageUrl: string;
  description: string;
  categoryId: string;
}

interface Category {
  id: string;
  name: string;
}

interface Location {
  id: string;
  name: string;
  region?: string;
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  selectedCategory: string = '';
  selectedLocation: string = '';
  
  professionals: Professional[] = [
    {
      id: 1,
      name: 'Juan Pérez',
      profession: 'Carpintero',
      location: 'Merida',
      rating: 4.8,
      imageUrl: 'assets/images/carpintero.webp',
      description: 'Especialista en muebles a medida con más de 15 años de experiencia.',
      categoryId: 'carpinteria'
    },
    {
      id: 2,
      name: 'Carlos Gómez',
      profession: 'Electricista',
      location: 'CDMX',
      rating: 4.9,
      imageUrl: 'assets/images/electricista.webp',
      description: 'Especialista en instalaciones eléctricas residenciales y comerciales.',
      categoryId: 'electricidad'
    },
    {
      id: 3,
      name: 'Jaime López',
      profession: 'Plomera',
      location: 'Guadalajara',
      rating: 4.7,
      imageUrl: 'assets/images/plomero.webp',
      description: 'Experta en reparaciones y mantenimiento de sistemas de agua y gas.',
      categoryId: 'plomeria'
    },
    {
      id: 4,
      name: 'Juan Carlos Hernández',
      profession: 'Albañil',
      location: 'Monterrey',
      rating: 4.8,
      imageUrl: 'assets/images/albañil.webp',
      description: 'Maestro en construcción y remodelación de edificios y estructuras.',
      categoryId: 'albanileria'
    },
    {
      id: 5,
      name: 'Mariano Rodríguez',
      profession: 'Mecánico',
      location: 'Puebla',
      rating: 4.6,
      imageUrl: 'assets/images/mecanico.webp',
      description: 'Especialista en reparaciones y mantenimiento de vehículos.',
      categoryId: 'mecanica'
    },
    {
      id: 6,
      name: 'Luis Sánchez',
      profession: 'Refrigeración',
      location: 'Campeche',
      rating: 4.9,
      imageUrl: 'assets/images/refrigeracion.webp',
      description: 'Especialista en instalación y mantenimiento de sistemas de refrigeración y A/C',
      categoryId: 'refrigeracion'
    }
  ];

  categories: Category[] = [
    { id: 'carpinteria', name: 'Carpintería' },
    { id: 'electricidad', name: 'Electricidad' },
    { id: 'plomeria', name: 'Plomería' },
    { id: 'albanileria', name: 'Albañilería' },
    { id: 'mecanica', name: 'Mecánica' },
    { id: 'refrigeracion', name: 'Refrigeración' }
  ];

  locations: Location[] = [
    // Ciudad de México
    { id: 'cdmx', name: 'CDMX' },
    // Estado de México
    { id: 'edomex', name: 'EDOMEX' },  
    // Otras zonas metropolitanas
    { id: 'guadalajara', name: 'Guadalajara' },
    { id: 'monterrey', name: 'Monterrey' },
    { id: 'puebla', name: 'Puebla' },
    { id: 'queretaro', name: 'Querétaro' },
    { id: 'tijuana', name: 'Tijuana' },
    { id: 'merida', name: 'Mérida' },
    { id: 'campeche', name: 'Campeche' },
    { id: 'cancun', name: 'Cancún' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Guardamos una copia de todos los profesionales
    this.allProfessionals = [...this.professionals];
    this.loadProfessionals();
  }

  loadProfessionals(): void {
    // Aquí iría la lógica para cargar profesionales desde el backend
  }

  onSearch(): void {
    // Comenzamos con todos los profesionales
    let filteredProfessionals = [...this.allProfessionals];

    // Filtrar por término de búsqueda
    if (this.searchTerm.trim()) {
      const searchTermLower = this.searchTerm.toLowerCase().trim();
      filteredProfessionals = filteredProfessionals.filter(prof => 
        prof.name.toLowerCase().includes(searchTermLower) ||
        prof.profession.toLowerCase().includes(searchTermLower) ||
        prof.description.toLowerCase().includes(searchTermLower)
      );
    }

    // Filtrar por categoría
    if (this.selectedCategory) {
      filteredProfessionals = filteredProfessionals.filter(prof => 
        prof.categoryId === this.selectedCategory
      );
    }

    // Filtrar por ubicación
    if (this.selectedLocation) {
      filteredProfessionals = filteredProfessionals.filter(prof => 
        prof.location.toLowerCase() === this.selectedLocation.toLowerCase()
      );
    }

    // Actualizar la lista mostrada
    this.professionals = filteredProfessionals;
  }

  // Función para resetear los filtros
  resetFilters(): void {
    this.searchTerm = '';
    this.selectedCategory = '';
    this.selectedLocation = '';
    this.professionals = [...this.allProfessionals];
  }

  // Función para manejar cambios en tiempo real
  onSearchInputChange(): void {
    if (this.searchDebounceTimeout) {
      clearTimeout(this.searchDebounceTimeout);
    }
    this.searchDebounceTimeout = setTimeout(() => {
      this.onSearch();
    }, 300);
  }

  private searchDebounceTimeout: any;

  private allProfessionals: Professional[] = [];
}
