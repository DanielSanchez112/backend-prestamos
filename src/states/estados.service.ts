import { ConflictException, Injectable } from '@nestjs/common';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { PrismaService } from 'src/prisma.service';
import { Estados } from '@prisma/client';
import { ResourceNotFoundException } from 'src/common/exceptions/custom.exceptions';


@Injectable()
export class EstadosService {
  constructor(private prisma: PrismaService){}

  async create(createEstadoDto: CreateEstadoDto) : Promise<Estados>{
    const existingEstado = await this.prisma.estados.findFirst({
      where: { nombre: createEstadoDto.nombre }
    })
    if( existingEstado ){
      throw new ConflictException(`Ya existe un estado con el nombre ${createEstadoDto.nombre}`)
    }
    const data = this.prisma.estados.create({
      data: createEstadoDto
    })
    return data
  }

  async findAll(): Promise<Estados []>{
    const data = await this.prisma.estados.findMany({
      orderBy: { nombre: 'asc' }
    })

    if(!data){
      throw new ResourceNotFoundException('No se encontraron estados')
    }
    
    return data
  }

  async findOne(id: number): Promise<Estados> {
    const data = await this.prisma.estados.findUnique({
      where: { id: id}
    })

    if(!data){
      throw new ResourceNotFoundException(`No se encontró un estado con el id ${id}`);
    }else{
      return data
    }
  }

  async update(id: number, updateEstadoDto: UpdateEstadoDto) {
    const existingEstado = await this.prisma.estados.findFirst({
      where:{ nombre: updateEstadoDto.nombre}
    })

    if(existingEstado){
      throw new ConflictException(`Ya existe un estado con el id ${id}`)
    }

    const data = await this.prisma.estados.update({
      where: { id: id },
      data: updateEstadoDto
    })

    return data
  }

  async remove(id: number): Promise<void> {
    const existingEstado = await this.prisma.estados.findUnique({
      where: {id:id}
    })

    if(!existingEstado){
      throw new ResourceNotFoundException(`No se encontró un estado con el id ${id}`);
    }

    await this.prisma.estados.delete({
      where: {id:id}
    })
  }
}
