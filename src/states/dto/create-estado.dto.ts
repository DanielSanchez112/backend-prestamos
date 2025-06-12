import { IsOptional ,IsString} from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'


export class CreateEstadoDto {

    @ApiProperty()
    @IsOptional()
    @IsString()
        @ApiPropertyOptional({
        description: 'Optional field for email, can be used for updates',
        example: 'Tabasco'
    })
    nombre: string
}
