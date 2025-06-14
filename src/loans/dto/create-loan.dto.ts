import { ApiProperty } from '@nestjs/swagger';
import {IsInt,IsOptional,IsNumber,IsDateString,IsBoolean,
} from 'class-validator';

export class CreateLoanDto {
    @ApiProperty({
        example: 1,
        description: 'ID del cliente asociado al préstamo',
        required: true,
    })
    @IsInt()
    idCliente: number;

    @ApiProperty({
        example: 2,
        description: 'ID del usuario que crea el préstamo',
        required: true,
    })
    @IsInt()
    idUsuario: number;

  @ApiProperty({
    example: 10000.50,
    description: 'Monto total del préstamo',
    required: true,
  })
  @IsNumber()
  monto: number;

  @ApiProperty({
    example: '2024-06-01T00:00:00.000Z',
    description: 'Fecha de inicio del préstamo (ISO 8601)',
    required: true,
  })
  @IsDateString()
  fechaInicio: string;

  @ApiProperty({
    example: '2024-07-01T00:00:00.000Z',
    description: 'Fecha del siguiente pago (intervalo de pago, ISO 8601)',
    required: true,
  })
  @IsDateString()
  intervaloPago: string;

  @ApiProperty({
    example: 500.00,
    description: 'Pago mínimo requerido en cada intervalo',
    required: true,
  })
  @IsNumber()
  pagoMinimo: number;

  @ApiProperty({
    example: '2025-06-01T00:00:00.000Z',
    description: 'Fecha de finalización del préstamo (ISO 8601)',
    required: true,
  })
  @IsDateString()
  fechaFin: string;

  @ApiProperty({
    example: 12.5,
    description: 'Tasa de interés aplicada al préstamo',
    required: true,
  })
  @IsNumber()
  tasa: number;

  @ApiProperty({
    example: true,
    description: 'Estatus del préstamo (activo/inactivo)',
    required: false,
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  status?: boolean;
}
