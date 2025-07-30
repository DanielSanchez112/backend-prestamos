export interface PaymentMethod {
  id: number;
  nombre: string;
  status?: boolean;
  pagos?: {
    id: number;
    monto: number;
    fechaPago: Date;
    status: boolean;
    prestamo?: {
      id: number;
      monto: number;
      cliente?: {
        id: number;
        nombre: string;
        apellidoPaterno: string;
        apellidoMaterno?: string;
      };
    };
  }[];
}
