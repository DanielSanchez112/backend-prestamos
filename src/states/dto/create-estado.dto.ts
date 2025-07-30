import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEstadoDto {
    @ApiProperty({
        description: 'Nombre del estado',
        example: 'Tabasco'
    })
    @IsString()
    nombre: string;
}
