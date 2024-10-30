export interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  serviceType: string;
}

export interface Certification {
  id: number;
  name: string;
  institution: string;
  year: string;
  description?: string;
  imageUrl?: string;
}

export interface Professional {
  id: number;
  name: string;
  lastName?: string;
  profession: string;
  location: string;
  rating: number;
  imageUrl: string;
  description: string;
  categoryId: string;
  email?: string;
  phone?: string;
  skills?: string[];
  experience?: Experience[];
  reviews: Review[];
  certifications: Certification[];
  servicios: Servicio[];
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  description: string;
}

export interface Servicio {
  nombre: string;
  precioBase: number;
  descripcion: string;
  caracteristicas: string[];
}
