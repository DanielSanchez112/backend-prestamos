
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, IsBoolean } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({
        description: 'Nombre del usuario',
        example: 'Juan Pérez',
    })
    @IsString()
    nombre: string;

    @ApiProperty({
        description: 'Contraseña del usuario',
        example: 'password123',
    })
    @IsString()
    password: string;

    @ApiProperty({
        description: 'Correo electrónico del usuario',
        example: 'juan.perez@email.com',
    })
    @IsEmail()
    correo: string;

    @ApiPropertyOptional({
        description: 'Estatus del usuario (activo/inactivo)',
        example: true,
        default: true,
    })
    @IsOptional()
    @IsBoolean()
    estatus?: boolean;
}