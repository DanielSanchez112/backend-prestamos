import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateLoansContractDto {
    @ApiProperty({
        description: 'ID del préstamo asociado al contrato',
        example: 1,
    })
    @IsInt()
    idPrestamos: number;

    @ApiPropertyOptional({
        description: 'URL del contrato',
        example: 'https://example.com/contracts/contract_123.pdf',
    })
    @IsOptional()
    @IsString()
    url?: string;

    @ApiPropertyOptional({
        description: 'Estatus del contrato (activo/inactivo)',
        example: true,
        default: true,
    })
    @IsOptional()
    @IsBoolean()
    status?: boolean;
}
