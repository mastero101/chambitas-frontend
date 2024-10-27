import { Certification } from "./certification.interface";
import { Service } from "./service.interface";

export interface User {
  id: string;
  email: string;
  role: 'client' | 'professional';
  firstName: string;
  lastName: string;
  createdAt: Date;
}

export interface Professional extends User {
  description?: string;
  services: Service[];
  certifications: Certification[];
  rating: number;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
}
