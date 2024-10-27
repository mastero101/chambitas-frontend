import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'tu-api-url/auth';

  constructor(private http: HttpClient) {}

  login(credentials: {email: string, password: string}) {
    return this.http.post<{token: string, user: User}>(`${this.apiUrl}/login`, credentials);
  }

  register(userData: {
    email: string,
    password: string,
    role: 'client' | 'professional',
    firstName: string,
    lastName: string
  }) {
    return this.http.post<{token: string, user: User}>(`${this.apiUrl}/register`, userData);
  }

  logout() {
    localStorage.removeItem('token');
    // Implementar lógica adicional de logout
  }
}
