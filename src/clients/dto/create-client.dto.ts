import { IsOptional, IsInt, IsString, IsDateString, IsBoolean } from 'class-validator';
import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';

export class CreateClientDto {
    @ApiPropertyOptional({
        description: 'ID de la dirección asociada al cliente',
        example: 1,
    })
    @IsOptional()
    @IsInt()
    idDireccion?: number;

    @ApiPropertyOptional({
        description: 'ID del usuario asociado al cliente',
        example: 2,
    })
    @IsOptional()
    @IsInt()
    idUsuario?: number;

    @ApiProperty({
        description: 'Nombre del cliente',
        example: 'Juan',
    })
    @IsString()
    nombre: string;

    @ApiProperty({
        description: 'Apellido paterno del cliente',
        example: 'Pérez',
    })
    @IsString()
    apellidoPaterno: string;

    @ApiPropertyOptional({
        description: 'Apellido materno del cliente',
        example: 'García',
    })
    @IsOptional()
    @IsString()
    apellidoMaterno?: string;

    @ApiPropertyOptional({
        description: 'RFC del cliente',
        example: 'PEPJ8001019Q8',
    })
    @IsOptional()
    @IsString()
    rfc?: string;

    @ApiPropertyOptional({
        description: 'INE del cliente',
        example: 'INE123456789',
    })
    @IsOptional()
    @IsString()
    ine?: string;

    @ApiPropertyOptional({
        description: 'Comprobante de domicilio del cliente',
        example: 'comprobante.pdf',
    })
    @IsOptional()
    @IsString()
    comprobanteDomicilio?: string;

    @ApiPropertyOptional({
        description: 'CURP del cliente',
        example: 'PEPJ800101HDFRRN09',
    })
    @IsOptional()
    @IsString()
    curp?: string;

    @ApiPropertyOptional({
        description: 'Fecha de nacimiento del cliente',
        example: '1990-01-01T00:00:00Z',
    })
    @IsOptional()
    @IsDateString()
    fechaNacimiento?: Date;

    @ApiProperty({
        description: 'Estatus del cliente (activo/inactivo)',
        example: true,
        default: true,
    })
    @IsOptional()
    @IsBoolean()
    estatus: boolean = true;
}
