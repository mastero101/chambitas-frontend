import { Certification } from "./certification.interface";
import { Service } from "./service.interface";

// Interfaz base para usuarios
export interface BaseUser {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
  memberSince: string;
  role: 'client' | 'professional';
}

// Interfaz específica para clientes
export interface User extends BaseUser {
  role: 'client';
  location: string;
  totalServices: number;
  completedServices: number;
  activeServices: number;
}

// Interfaz específica para profesionales
export interface Professional extends BaseUser {
  role: 'professional';
  profession: string;
  description: string;
  services: Service[];
  certifications: Certification[];
  rating: number;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
}
