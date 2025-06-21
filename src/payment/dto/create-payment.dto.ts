import { ApiProperty } from '@nestjs/swagger';
import {IsInt,IsOptional,IsNumber,IsDateString,IsBoolean} from 'class-validator';

export class CreatePaymentDto {
  @ApiProperty({
    example: 1,
    description: 'ID del préstamo asociado al pago',
    required: true,
  })
  @IsInt()
  idPrestamos: number;

  @ApiProperty({
    example: 2,
    description: 'ID del método de pago',
    required: true,
  })
  @IsInt()
  idMetodoPago: number;

  @ApiProperty({
    example: 1500.75,
    description: 'Monto pagado',
    required: true,
  })
  @IsNumber()
  monto: number;

  @ApiProperty({
    example: '2024-06-15T00:00:00.000Z',
    description: 'Fecha en la que se realizó el pago (ISO 8601)',
    required: true,
  })
  @IsDateString()
  fechaPago: string;

  @ApiProperty({
    example: true,
    description: 'Estatus del pago (activo/inactivo)',
    required: false,
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  status?: boolean;
}