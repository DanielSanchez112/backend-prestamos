import { Injectable, ConflictException } from '@nestjs/common';
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment-method.dto';
import { PrismaService } from 'src/prisma.service';
import { ResourceNotFoundException } from 'src/common/exceptions/custom.exceptions';

@Injectable()
export class PaymentMethodsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPaymentMethodDto: CreatePaymentMethodDto) {
    // Verificar que no exista un método de pago con el mismo nombre
    const existingPaymentMethod = await this.prisma.metodoPago.findFirst({
      where: {
        nombre: {
          equals: createPaymentMethodDto.nombre,
          mode: 'insensitive'
        }
      }
    });

    if (existingPaymentMethod) {
      throw new ConflictException(`Ya existe un método de pago con el nombre ${createPaymentMethodDto.nombre}`);
    }

    const data = await this.prisma.metodoPago.create({
      data: {
        ...createPaymentMethodDto,
        status: createPaymentMethodDto.status ?? true
      }
    });

    return data;
  }

  async findAll() {
    const data = await this.prisma.metodoPago.findMany({
      orderBy: { nombre: 'asc' },
      include: {
        pagos: {
          include: {
            prestamo: {
              include: {
                cliente: true
              }
            }
          }
        }
      }
    });

    if (!data || data.length === 0) {
      throw new ResourceNotFoundException('No se encontraron métodos de pago');
    }

    return data;
  }

  async findAllActive() {
    const data = await this.prisma.metodoPago.findMany({
      where: { status: true },
      orderBy: { nombre: 'asc' }
    });

    if (!data || data.length === 0) {
      throw new ResourceNotFoundException('No se encontraron métodos de pago activos');
    }

    return data;
  }

  async findOne(id: number) {
    const data = await this.prisma.metodoPago.findUnique({
      where: { id: id },
      include: {
        pagos: {
          include: {
            prestamo: {
              include: {
                cliente: true
              }
            }
          }
        }
      }
    });

    if (!data) {
      throw new ResourceNotFoundException(`No se encontró un método de pago con el id ${id}`);
    }

    return data;
  }

  async update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    const existingPaymentMethod = await this.prisma.metodoPago.findUnique({
      where: { id: id }
    });

    if (!existingPaymentMethod) {
      throw new ResourceNotFoundException(`No se encontró un método de pago con el id ${id}`);
    }

    // Si se actualiza el nombre, verificar que no exista otro con el mismo nombre
    if (updatePaymentMethodDto.nombre) {
      const duplicatePaymentMethod = await this.prisma.metodoPago.findFirst({
        where: {
          nombre: {
            equals: updatePaymentMethodDto.nombre,
            mode: 'insensitive'
          },
          NOT: { id: id }
        }
      });

      if (duplicatePaymentMethod) {
        throw new ConflictException(`Ya existe un método de pago con el nombre ${updatePaymentMethodDto.nombre}`);
      }
    }

    const data = await this.prisma.metodoPago.update({
      where: { id: id },
      data: updatePaymentMethodDto,
      include: {
        pagos: {
          include: {
            prestamo: {
              include: {
                cliente: true
              }
            }
          }
        }
      }
    });

    return data;
  }

  async remove(id: number) {
    const existingPaymentMethod = await this.prisma.metodoPago.findUnique({
      where: { id: id }
    });

    if (!existingPaymentMethod) {
      throw new ResourceNotFoundException(`No se encontró un método de pago con el id ${id}`);
    }

    // Verificar si tiene pagos asociados
    const paymentsCount = await this.prisma.pagos.count({
      where: { idMetodoPago: id }
    });

    if (paymentsCount > 0) {
      throw new ConflictException(`No se puede eliminar el método de pago porque tiene ${paymentsCount} pagos asociados. Considere desactivarlo en su lugar.`);
    }

    await this.prisma.metodoPago.delete({
      where: { id: id }
    });

    return { message: `Método de pago con id ${id} eliminado exitosamente` };
  }

  async deactivate(id: number) {
    const existingPaymentMethod = await this.prisma.metodoPago.findUnique({
      where: { id: id }
    });

    if (!existingPaymentMethod) {
      throw new ResourceNotFoundException(`No se encontró un método de pago con el id ${id}`);
    }

    const data = await this.prisma.metodoPago.update({
      where: { id: id },
      data: { status: false }
    });

    return data;
  }

  async activate(id: number) {
    const existingPaymentMethod = await this.prisma.metodoPago.findUnique({
      where: { id: id }
    });

    if (!existingPaymentMethod) {
      throw new ResourceNotFoundException(`No se encontró un método de pago con el id ${id}`);
    }

    const data = await this.prisma.metodoPago.update({
      where: { id: id },
      data: { status: true }
    });

    return data;
  }
}
