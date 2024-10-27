export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  duration?: number; // duración estimada en minutos
  isActive: boolean;
  createdAt: Date;
}
