import { ConflictException, Injectable } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { PrismaService } from 'src/prisma.service';
import { ResourceNotFoundException } from 'src/common/exceptions/custom.exceptions';

@Injectable()
export class LoansService {
  constructor(private prisma: PrismaService){}

  async create(createLoanDto: CreateLoanDto){
    const existingLoan = await this.prisma.prestamos.findFirst({
      where: {
        idCliente: createLoanDto.idCliente
      }
    })

    if(existingLoan){
      throw new ConflictException(`Ya existe un préstamo para el cliente con ID ${createLoanDto.idCliente}`);
    } else {
      const data = await this.prisma.prestamos.create({
        data: createLoanDto
      });
      return data;
    }
  }

  async findAll() {
    const data = await this.prisma.prestamos.findMany({
      where: { status: true},
      orderBy: { fechaInicio: 'asc' }
    })
    if (!data || data.length === 0) {
      throw new ResourceNotFoundException('No se encontraron préstamos activos');
    } else {
      return data;
    }
  }

  async findOne(id: number) {
    const data = await this.prisma.prestamos.findUnique({
      where: { id: id}
    })
    if (!data) {
      throw new ResourceNotFoundException(`No se encontró un préstamo con el ID ${id}`);
    } else {
      return data;
    }
  }

  async update(id: number, updateLoanDto: UpdateLoanDto) {
    const existingLoan = await this.prisma.prestamos.findUnique({
      where: { id: id}
    })
    if (!existingLoan) {
      throw new ResourceNotFoundException(`No se encontró un préstamo con el ID ${id}`);
    }
    const data = await this.prisma.prestamos.update({
      where: { id: id},
      data: updateLoanDto
    })
    if (!data) {
      throw new ResourceNotFoundException(`No se pudo actualizar el préstamo con el ID ${id}`);
    } else {
      return data;
    }
  }

  async remove(id: number) {
    const existingLoan = await this.prisma.prestamos.findUnique({
      where: { id: id }
    })
    if (!existingLoan) {
      throw new ResourceNotFoundException(`No se encontró un préstamo con el ID ${id}`);
    }else{
      const data = await this.prisma.prestamos.delete({
        where: { id: id }
      })
    }
  }

  async changeStatusFalse(id: number) {
    const exisitingLoan = await this.prisma.prestamos.findUnique({
      where: { id: id }
    })
    if(!exisitingLoan){
      throw new ResourceNotFoundException(`No se encontró un prestamo con el id ${id}`);
    }else{
      const data = await this.prisma.prestamos.update({
        where: {id: id },
        data: {
          status: false
        }
      })
      return data
    }
  }

  async changeStatusTrue(id: number) {
    const exisitingLoan = await this.prisma.prestamos.findUnique({
      where: { id: id }
    })
    if(!exisitingLoan){
      throw new ResourceNotFoundException(`No se encontró un prestamo con el id ${id}`);
    }else{
      const data = await this.prisma.prestamos.update({
        where: {id: id },
        data: {
          status: true
        }
      })
      return data
    }
  }

  async findByClientId(idCliente: number){
    const data = await this.prisma.prestamos.findFirst({
      where: { idCliente: idCliente}
    })
    if (!data) {
      throw new ResourceNotFoundException(`No se encontró un préstamo para el cliente con ID ${idCliente}`);
    } else {
      return data;
    }
  }

  async findByUsuarioId(idUsuario: number) {
    const data = await this.prisma.prestamos.findMany({
      where: { idUsuario: idUsuario, status: true }
    })
    if (!data || data.length === 0) {
      throw new ResourceNotFoundException(`No se encontraron préstamos activos para el usuario con ID ${idUsuario}`);
    } else {
      return data;
    }
  }
}
