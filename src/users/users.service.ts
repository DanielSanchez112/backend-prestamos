import { ConflictException, Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { PrismaService } from 'src/prisma.service'
import * as bcrypt from 'bcrypt';
import { ResourceNotFoundException } from 'src/common/exceptions/custom.exceptions';
import { Usuarios } from '@prisma/client';

@Injectable()
export class UsersService {
	readonly salt = 12
	constructor(private prisma: PrismaService){}

	async create(createUserDto: CreateUserDto): Promise<Usuarios> {
		const existingUserEmail = await this.prisma.usuarios.findFirst({
			where: { correo: createUserDto.correo}
		})
		const exisitinUserName = await this.prisma.usuarios.findFirst({
			where: { nombre: createUserDto.nombre}
		})
		
		if(existingUserEmail || exisitinUserName){
			throw new ConflictException(`Ya existe un usuario con el correo ${createUserDto.correo} o el nombre ${createUserDto.nombre}`)
		}
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

	async findAll(): Promise<Usuarios []> {
		return await this.prisma.usuarios.findMany()
	}

	async findOne(id: number): Promise<Usuarios> {
		const data = await this.prisma.usuarios.findUnique({
			where: { id: id}
		})
		if(!data){
			throw new ResourceNotFoundException(`No se encontró un usuario con el id ${id}`);
		}
		return data
	}
		

	async update(id: number, updateUserDto: UpdateUserDto): Promise<Usuarios> {
		const existingUser = await this.prisma.usuarios.findUnique({
			where: { id: id}
		})
		const existingUserEmail = await this.prisma.usuarios.findFirst({
			where: { correo: updateUserDto.correo }
		})
		const existingUserName = await this.prisma.usuarios.findFirst({
			where: { nombre: updateUserDto.nombre }
		})
		if(existingUserEmail || existingUserName){
			throw new ConflictException(`Ya existe un usuario con el correo ${updateUserDto.correo} o el nombre ${updateUserDto.nombre}`);
		}
		if(!existingUser){
			throw new ResourceNotFoundException(`No se encontró un usuario con el id ${id}`);
		}


		const data = await this.prisma.usuarios.update({
			where: { id },
			data: {
				...updateUserDto,
				fechaActualizacion: new Date()
			}
		})

		return data
	}

	async chageStatusFalse(id: number): Promise<Usuarios> {
		const existingUser = await this.prisma.usuarios.findUnique({
			where: { id: id}
		})
		if(!existingUser){
			throw new ResourceNotFoundException(`No se encontró un usuario con el id ${id}`);
		}
		const data = await this.prisma.usuarios.update({
			where: { id: id},
			data: {
				estatus: false,
				fechaActualizacion: new Date()
			}
		})
			
		return data
	}

	async chageStatusTrue(id: number): Promise<Usuarios> {
		const existingUser = await this.prisma.usuarios.findUnique({
			where: { id: id}
		})
		if(!existingUser){
			throw new ResourceNotFoundException(`No se encontró un usuario con el id ${id}`);
		}
		const data = await this.prisma.usuarios.update({
			where: { id: id},
			data: {
				estatus: true,
				fechaActualizacion: new Date()
			}
		})
			
		return data
	}

	async remove(id: number) {
		const existingUser = await this.prisma.usuarios.findUnique({
			where: { id: id}
		})
		if(!existingUser){
			throw new ResourceNotFoundException(`No se encontró un usuario con el id ${id}`);
		}

		return await this.prisma.usuarios.delete({
			where: { id: id}
		})
	}

}
