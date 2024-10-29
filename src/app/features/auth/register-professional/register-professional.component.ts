import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-register-professional',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass,
    RouterLink
  ],
  templateUrl: './register-professional.component.html',
  styleUrl: './register-professional.component.scss'
})
export class RegisterProfessionalComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      profession: ['', Validators.required],
      experience: ['', [Validators.required, Validators.min(0)]],
      skills: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(100)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      location: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null : { passwordMismatch: true };
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      localStorage.setItem('token', 'mock-professional-token');
      this.router.navigate(['/dashboard']);
    }
  }
}
