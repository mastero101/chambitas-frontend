import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  
  // Credenciales mock actualizadas
  private mockCredentials = {
    email: 'admin@admin.com',
    password: 'admin'
  };

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      
      if (email === this.mockCredentials.email && password === this.mockCredentials.password) {
        // Guardamos un token simple en localStorage
        localStorage.setItem('token', 'mock-jwt-token');
        console.log('Login exitoso!');
        alert('Login exitoso! Bienvenido');
        this.router.navigate(['/dashboard']);
      } else {
        console.log('Credenciales incorrectas');
        alert('Credenciales incorrectas');
      }
    } else {
      console.log('Formulario inválido:', this.loginForm.errors);
    }
  }
}
