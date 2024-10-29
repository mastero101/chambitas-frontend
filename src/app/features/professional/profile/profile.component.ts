import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { Professional } from '@core/models/professional.interface';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  professional: Professional | null = null;

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
    }
  }

  goBack(): void {
    this.location.back();
  }

  iniciarChat(): void {
    // Aquí irá la lógica para iniciar el chat
    console.log('Iniciando chat con:', this.professional?.name);
  }

  dejarMensaje(): void {
    // Aquí irá la lógica para dejar un mensaje
    console.log('Abriendo formulario de mensaje para:', this.professional?.name);
  }

  verMasResenas(): void {
    // Implementar lógica para cargar más reseñas
    console.log('Cargando más reseñas...');
  }
}
