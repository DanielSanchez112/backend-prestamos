import { Injectable, ConflictException } from '@nestjs/common';
import { CreateLoansContractDto } from './dto/create-loans-contract.dto';
import { UpdateLoansContractDto } from './dto/update-loans-contract.dto';
import { PrismaService } from 'src/prisma.service';
import { ResourceNotFoundException } from 'src/common/exceptions/custom.exceptions';

@Injectable()
export class LoansContractsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLoansContractDto: CreateLoansContractDto) {
    // Verificar que el préstamo existe
    const existingLoan = await this.prisma.prestamos.findUnique({
      where: { id: createLoansContractDto.idPrestamos }
    });

    if (!existingLoan) {
      throw new ResourceNotFoundException(`No se encontró un préstamo con el id ${createLoansContractDto.idPrestamos}`);
    }

    // Verificar si ya existe un contrato para este préstamo
    const existingContract = await this.prisma.contratos.findFirst({
      where: { idPrestamos: createLoansContractDto.idPrestamos }
    });

    if (existingContract) {
      throw new ConflictException(`Ya existe un contrato para el préstamo con id ${createLoansContractDto.idPrestamos}`);
    }

    const data = await this.prisma.contratos.create({
      data: {
        ...createLoansContractDto,
        fechaCreacion: new Date(),
        fechaActualizacion: new Date()
      },
      include: {
        prestamo: {
          include: {
            cliente: true,
            usuario: true
          }
        }
      }
    });

    return data;
  }

  async findAll() {
    const data = await this.prisma.contratos.findMany({
      include: {
        prestamo: {
          include: {
            cliente: true,
            usuario: true
          }
        }
      },
      orderBy: { fechaCreacion: 'desc' }
    });

    if (!data || data.length === 0) {
      throw new ResourceNotFoundException('No se encontraron contratos');
    }

    return data;
  }

  async findOne(id: number) {
    const data = await this.prisma.contratos.findUnique({
      where: { id: id },
      include: {
        prestamo: {
          include: {
            cliente: true,
            usuario: true
          }
        }
      }
    });

    if (!data) {
      throw new ResourceNotFoundException(`No se encontró un contrato con el id ${id}`);
    }

    return data;
  }

  async findByLoanId(loanId: number) {
    const data = await this.prisma.contratos.findFirst({
      where: { idPrestamos: loanId },
      include: {
        prestamo: {
          include: {
            cliente: true,
            usuario: true
          }
        }
      }
    });

    if (!data) {
      throw new ResourceNotFoundException(`No se encontró un contrato para el préstamo con id ${loanId}`);
    }

    return data;
  }

  async update(id: number, updateLoansContractDto: UpdateLoansContractDto) {
    const existingContract = await this.prisma.contratos.findUnique({
      where: { id: id }
    });

    if (!existingContract) {
      throw new ResourceNotFoundException(`No se encontró un contrato con el id ${id}`);
    }

    // Si se actualiza el préstamo, verificar que existe
    if (updateLoansContractDto.idPrestamos) {
      const existingLoan = await this.prisma.prestamos.findUnique({
        where: { id: updateLoansContractDto.idPrestamos }
      });

      if (!existingLoan) {
        throw new ResourceNotFoundException(`No se encontró un préstamo con el id ${updateLoansContractDto.idPrestamos}`);
      }

      // Verificar que no exista otro contrato para este préstamo
      const duplicateContract = await this.prisma.contratos.findFirst({
        where: { 
          idPrestamos: updateLoansContractDto.idPrestamos,
          NOT: { id: id }
        }
      });

      if (duplicateContract) {
        throw new ConflictException(`Ya existe un contrato para el préstamo con id ${updateLoansContractDto.idPrestamos}`);
      }
    }

    const data = await this.prisma.contratos.update({
      where: { id: id },
      data: {
        ...updateLoansContractDto,
        fechaActualizacion: new Date()
      },
      include: {
        prestamo: {
          include: {
            cliente: true,
            usuario: true
          }
        }
      }
    });

    return data;
  }

  async remove(id: number) {
    const existingContract = await this.prisma.contratos.findUnique({
      where: { id: id }
    });

    if (!existingContract) {
      throw new ResourceNotFoundException(`No se encontró un contrato con el id ${id}`);
    }

    await this.prisma.contratos.delete({
      where: { id: id }
    });

    return { message: `Contrato con id ${id} eliminado exitosamente` };
  }
}
