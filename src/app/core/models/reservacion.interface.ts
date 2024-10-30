export interface Reservacion {
  fecha: Date;
  horaInicio: string;
  duracion: number;
  profesionalId: number;
  estado: 'pendiente' | 'confirmada' | 'cancelada';
  servicio: string;
  // Puedes agregar más campos según necesites
  clienteId?: number;
  precio?: number;
  notas?: string;
} 