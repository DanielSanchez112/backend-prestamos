import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpStatus, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { LoansContractsService } from './loans-contracts.service';
import { CreateLoansContractDto } from './dto/create-loans-contract.dto';
import { UpdateLoansContractDto } from './dto/update-loans-contract.dto';

@ApiTags('Contratos de Préstamos')
@Controller('loans-contracts')
export class LoansContractsController {
  constructor(private readonly loansContractsService: LoansContractsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Crear un nuevo contrato de préstamo' })
  @ApiResponse({ status: 201, description: 'Contrato creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 404, description: 'Préstamo no encontrado' })
  @ApiResponse({ status: 409, description: 'Ya existe un contrato para este préstamo' })
  create(@Body() createLoansContractDto: CreateLoansContractDto) {
    return this.loansContractsService.create(createLoansContractDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los contratos de préstamos' })
  @ApiResponse({ status: 200, description: 'Lista de contratos obtenida exitosamente' })
  @ApiResponse({ status: 404, description: 'No se encontraron contratos' })
  findAll() {
    return this.loansContractsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un contrato por ID' })
  @ApiParam({ name: 'id', description: 'ID del contrato', type: 'number' })
  @ApiResponse({ status: 200, description: 'Contrato obtenido exitosamente' })
  @ApiResponse({ status: 404, description: 'Contrato no encontrado' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.loansContractsService.findOne(id);
  }

  @Get('loan/:loanId')
  @ApiOperation({ summary: 'Obtener contrato por ID de préstamo' })
  @ApiParam({ name: 'loanId', description: 'ID del préstamo', type: 'number' })
  @ApiResponse({ status: 200, description: 'Contrato obtenido exitosamente' })
  @ApiResponse({ status: 404, description: 'Contrato no encontrado para este préstamo' })
  findByLoanId(@Param('loanId', ParseIntPipe) loanId: number) {
    return this.loansContractsService.findByLoanId(loanId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un contrato por ID' })
  @ApiParam({ name: 'id', description: 'ID del contrato', type: 'number' })
  @ApiResponse({ status: 200, description: 'Contrato actualizado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 404, description: 'Contrato no encontrado' })
  @ApiResponse({ status: 409, description: 'Conflicto al actualizar el contrato' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateLoansContractDto: UpdateLoansContractDto) {
    return this.loansContractsService.update(id, updateLoansContractDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Eliminar un contrato por ID' })
  @ApiParam({ name: 'id', description: 'ID del contrato', type: 'number' })
  @ApiResponse({ status: 204, description: 'Contrato eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Contrato no encontrado' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.loansContractsService.remove(id);
  }
}
