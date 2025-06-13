import { ConflictException, Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'src/prisma.service';
import { ResourceNotFoundException } from 'src/common/exceptions/custom.exceptions';


@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  async create(createClienteDto: CreateClientDto){
    const existingClient = await this.prisma.clientes.findFirst({
      where: {
        rfc: createClienteDto.rfc,
        ine: createClienteDto.ine,
        curp: createClienteDto.curp
      }
    })

    if(existingClient){
      throw new ConflictException(`Ya existe un cliente con el RFC ${createClienteDto.rfc}, INE ${createClienteDto.ine} o CURP ${createClienteDto.curp}`)
    }else{
      const data = await this.prisma.clientes.create({
        data: createClienteDto
      })
      return data
    }
  }

  async findAll(){
    const data = await this.prisma.clientes.findMany({
      orderBy: { nombre: 'asc' }
    })

    if(!data){
      throw new ResourceNotFoundException('No se encontraron clientes');
    }else{
    return data
    }
  }

  async findOne(id: number) {
    const data = await this.prisma.clientes.findUnique({
      where: { id: id }
    })

    if(!data){
      throw new ResourceNotFoundException(`No se encontró un cliente con el id ${id}`);
    } else {
      return data;
    }
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    const data = await this.prisma.clientes.update({
      where: { id: id },
      data: updateClientDto
    })

    if(!data){
      throw new ResourceNotFoundException(`No se encontró un cliente con el id ${id}`);
    }else{
      return data;
    }
  }

  async changeStatusFalse(id: number){
    const exisitingClient = await this.prisma.clientes.findUnique({
      where: { id: id }
    })
    if(!exisitingClient){
      throw new ResourceNotFoundException(`No se encontró un cliente con el id ${id}`);
    }else{
      const data = await this.prisma.clientes.update({
        where: {id: id },
        data: {
          estatus: false
        }
      })

      return data
    }
  }

  async changeStatusTrue(id: number){
        const exisitingClient = await this.prisma.clientes.findUnique({
      where: { id: id }
    })
    if(!exisitingClient){
      throw new ResourceNotFoundException(`No se encontró un cliente con el id ${id}`);
    }else{
      const data = await this.prisma.clientes.update({
        where: {id: id },
        data: {
          estatus: true
        }
      })

      return data
    }
  }

  async remove(id: number) {
    const existingClient = await this.prisma.clientes.findUnique({
      where: { id: id }
    })

    if(!existingClient){
      throw new ResourceNotFoundException(`No se encontró un cliente con el id ${id}`);
    }else{
      const data = await this.prisma.clientes.delete({
        where: { id: id}
      })
      return data
    }
  }
}
