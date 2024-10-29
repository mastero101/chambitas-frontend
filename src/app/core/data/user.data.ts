import { User } from '../models/user.interface';

export const CURRENT_USER: User = {
  id: '1',
  name: 'Ana',
  lastName: 'Martínez',
  email: 'ana.martinez@ejemplo.com',
  phone: '+52 999 123 4567',
  avatar: 'assets/images/avatar.webp',
  location: 'Mérida, Yucatán',
  memberSince: '2024-01-15',
  role: 'client',
  totalServices: 8,
  completedServices: 5,
  activeServices: 3
}; 