import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

//Reservados para uso futuro en servicios de autenticación
import { Store } from '@ngxs/store';
import { AuthState } from '../../../store/states/auth.state';
import { logout } from '../../../store/actions/auth.actions';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AsyncPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMobileMenuOpen: boolean | undefined;
  private isBrowser: boolean;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  
  isLoggedIn(): boolean {
    if (this.isBrowser) {
      return localStorage.getItem('token') !== null;
    }
    return false;
  }

  logout(): void {
    if (this.isBrowser) {
      localStorage.removeItem('token');
    }
    this.router.navigate(['/']);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
