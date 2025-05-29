import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { PrismaService } from 'src/prisma.service'
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
	readonly salt = 12
	constructor(private prisma: PrismaService){}

	async create(createUserDto: CreateUserDto) {
		const passHash = await bcrypt.hash(createUserDto.contrasena, this.salt)
		const {contrasena, ...rest} = createUserDto

		return this.prisma.usuarios.create({
			data: {
				...rest,
				contrasena: passHash,
				fechaCreacion: new Date(), 
				fechaActualizacion: new Date(), 
				estatus: true 
			}
		})
	}

	findAll() {
		return this.prisma.usuarios.findMany()
	}

	findOne(id: number) {
		return this.prisma.usuarios.findUnique({
			where: { id}
		})
	}

	update(id: number, updateUserDto: UpdateUserDto) {
		return this.prisma.usuarios.update({
			where: { id },
			data: {
				...updateUserDto,
				fechaActualizacion: new Date()
			}
		})
	}

	remove(id: number) {
		return this.prisma.usuarios.delete({
			where: { id}
		})
	}

}
