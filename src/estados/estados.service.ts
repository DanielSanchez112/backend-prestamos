import { Injectable } from '@nestjs/common';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class EstadosService {
  constructor(private prisma: PrismaService){}

  async create(createEstadoDto: CreateEstadoDto) {
    try {
      const data = await this.prisma.estados.create({
      data: createEstadoDto
    })
    
    return data
    } catch (error) {
      return new Error(`Error creating "estados": ${error.message}`)
    }
    
  }

  findAll() {
    return `This action returns all estados`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estado`;
  }

  update(id: number, updateEstadoDto: UpdateEstadoDto) {
    return `This action updates a #${id} estado`;
  }

  remove(id: number) {
    return `This action removes a #${id} estado`;
  }
}
