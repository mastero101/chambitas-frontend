import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { ProfileComponent } from './features/professional/profile/profile.component';
import { BookingListComponent } from './features/bookings/booking-list/booking-list.component';
import { DashboardComponent } from './features/client/dashboard/dashboard.component';
import { SearchComponent } from './features/search/search/search.component';
import { RegisterProfessionalComponent } from './features/auth/register-professional/register-professional.component';
import { RecentServicesComponent } from './features/client/recent-services/recent-services.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'register-professional', component: RegisterProfessionalComponent }
    ]
  },
  {
    path: 'professional',
    children: [
      { path: ':id', component: ProfileComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'bookings', component: BookingListComponent }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'recent-services',
    component: RecentServicesComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
