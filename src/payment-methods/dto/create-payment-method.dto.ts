import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreatePaymentMethodDto {
    @ApiProperty({
        description: 'Nombre del método de pago',
        example: 'Efectivo',
    })
    @IsString()
    nombre: string;

    @ApiPropertyOptional({
        description: 'Estatus del método de pago (activo/inactivo)',
        example: true,
        default: true,
    })
    @IsOptional()
    @IsBoolean()
    status?: boolean;
}
