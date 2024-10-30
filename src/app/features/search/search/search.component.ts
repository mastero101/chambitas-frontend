import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Professional } from '@core/models/professional.interface';
import { PROFESSIONALS } from '@core/data/professionals.data';
import { ChatComponent } from '../../chat/chat.component';

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
    FormsModule,
    RouterModule,
    ChatComponent
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  selectedCategory: string = '';
  selectedLocation: string = '';
  
  professionals: Professional[] = [];
  allProfessionals: Professional[] = [];
  
  categories: Category[] = [
    { id: 'carpinteria', name: 'Carpintería' },
    { id: 'electricidad', name: 'Electricidad' },
    { id: 'plomeria', name: 'Plomería' },
    { id: 'albanileria', name: 'Albañilería' },
    { id: 'mecanica', name: 'Mecánica' },
    { id: 'refrigeracion', name: 'Refrigeración' }
  ];

  locations: Location[] = [
    { id: 'cdmx', name: 'CDMX' },
    { id: 'edomex', name: 'EDOMEX' },  
    { id: 'guadalajara', name: 'Guadalajara' },
    { id: 'monterrey', name: 'Monterrey' },
    { id: 'puebla', name: 'Puebla' },
    { id: 'queretaro', name: 'Querétaro' },
    { id: 'tijuana', name: 'Tijuana' },
    { id: 'merida', name: 'Mérida' },
    { id: 'campeche', name: 'Campeche' },
    { id: 'cancun', name: 'Cancún' }
  ];

  showChat = false;
  selectedProfessional: Professional | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.professionals = PROFESSIONALS;
    this.allProfessionals = [...PROFESSIONALS];
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

  navigateToProfile(professional: Professional): void {
    this.router.navigate(['/professional/profile'], {
      state: { professional }
    });
  }

  contactProfessional(professional: Professional): void {
    this.selectedProfessional = professional;
    this.showChat = true;
  }

  onChatClose(): void {
    this.showChat = false;
    this.selectedProfessional = null;
  }
}
