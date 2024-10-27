import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { ProfileComponent } from './features/professional/profile/profile.component';
import { BookingListComponent } from './features/bookings/booking-list/booking-list.component';
import { DashboardComponent } from './features/client/dashboard/dashboard.component';
import { SearchComponent } from './features/search/search/search.component';
import { authGuard } from './core/guards/auth.guard';
import { professionalGuard } from './core/guards/professional.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  {
    path: 'professional',
    canActivate: [authGuard, professionalGuard],
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'bookings', component: BookingListComponent }
    ]
  },
  {
    path: 'client',
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent }
    ]
  },
  {
    path: 'search',
    component: SearchComponent
  }
];
