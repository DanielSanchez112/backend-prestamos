import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PrismaService } from 'src/prisma.service';
import { ResourceNotFoundException } from 'src/common/exceptions/custom.exceptions';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  async create(createPaymentDto: CreatePaymentDto) {
    const data = await this.prisma.pagos.create({
      data: {
        ...createPaymentDto,
        fechaPago: new Date(createPaymentDto.fechaPago)
      }
    })
    return data
  }

  async findAll() {
    const data = await this.prisma.pagos.findMany({
      where: { status: true },
      orderBy: { fechaPago: 'asc' }
    })
    if (!data || data.length === 0) {
      throw new ResourceNotFoundException('No se encontraron pagos activos');
    } else {
      return data;
    }
  }

  async findOne(id: number) {
    const data = await this.prisma.pagos.findUnique({
      where: {
        id: id,
        status: true 
      }
    })

    return data || new ResourceNotFoundException(`No se encontró un pago con el ID ${id}`);
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    const existingPayment = await this.prisma.pagos.findUnique({
      where: {
        id: id,
        status: true 
    }
    })
    if (!existingPayment) {
      throw new ResourceNotFoundException(`No se encontró un pago con el ID ${id}`);
    }

    const data = await this.prisma.pagos.update({
      where: { id: id, status: true },
      data: updatePaymentDto
    })
    return data
  }

    async changeStatusFalse(id: number) {
    const existingPayment = await this.prisma.pagos.findUnique({
      where: { id: id }
    })
    if(!existingPayment){
      throw new ResourceNotFoundException(`No se encontró un pagos con el id ${id}`);
    }else{
      const data = await this.prisma.pagos.update({
        where: {id: id },
        data: {
          status: false
        }
      })
      return data
    }
  }

  async changeStatusTrue(id: number) {
    const existingPayment = await this.prisma.pagos.findUnique({
      where: { id: id }
    })
    if(!existingPayment){
      throw new ResourceNotFoundException(`No se encontró un pagos con el id ${id}`);
    }else{
      const data = await this.prisma.pagos.update({
        where: {id: id },
        data: {
          status: true
        }
      })
      return data
    }
  }

  async remove(id: number) {
    const existingPayment = await this.prisma.pagos.findUnique({
      where: { id: id }
    })
    if (!existingPayment){
      throw new ResourceNotFoundException(`No se encontró un pago con el ID ${id}`);
    }
    const data = await this.prisma.pagos.delete({
      where: { id: id }
    })
    return data
  }
}
