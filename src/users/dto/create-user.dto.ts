import { IsOptional ,IsString, IsEmail, IsBoolean, IsDateString } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class CreateUserDto {
	@ApiProperty()
	@IsOptional()
	@IsString()
	nombre: string

	@ApiPropertyOptional({
		description: 'Optional field for password, can be used for updates',
		example: '1234'
	})
	@IsOptional()
	@IsString()
	contrasena: string

	@ApiPropertyOptional({
		description: 'Optional field for email, can be used for updates',
		example: 'correo@gmail.com'
	})
	@IsOptional()
	@IsEmail()
	correo: string

	@IsOptional()
	@IsDateString()
	fechaCreacion: Date

	@IsOptional()
	@IsDateString()
	fechaActualizacion: Date

	@IsOptional()
	@IsBoolean()
	estatus: boolean
}
