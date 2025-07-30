import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpStatus, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { PaymentMethodsService } from './payment-methods.service';
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment-method.dto';

@ApiTags('Métodos de Pago')
@Controller('payment-methods')
export class PaymentMethodsController {
  constructor(private readonly paymentMethodsService: PaymentMethodsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Crear un nuevo método de pago' })
  @ApiResponse({ status: 201, description: 'Método de pago creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 409, description: 'Ya existe un método de pago con ese nombre' })
  create(@Body() createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paymentMethodsService.create(createPaymentMethodDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los métodos de pago' })
  @ApiResponse({ status: 200, description: 'Lista de métodos de pago obtenida exitosamente' })
  @ApiResponse({ status: 404, description: 'No se encontraron métodos de pago' })
  findAll() {
    return this.paymentMethodsService.findAll();
  }

  @Get('active')
  @ApiOperation({ summary: 'Obtener todos los métodos de pago activos' })
  @ApiResponse({ status: 200, description: 'Lista de métodos de pago activos obtenida exitosamente' })
  @ApiResponse({ status: 404, description: 'No se encontraron métodos de pago activos' })
  findAllActive() {
    return this.paymentMethodsService.findAllActive();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un método de pago por ID' })
  @ApiParam({ name: 'id', description: 'ID del método de pago', type: 'number' })
  @ApiResponse({ status: 200, description: 'Método de pago obtenido exitosamente' })
  @ApiResponse({ status: 404, description: 'Método de pago no encontrado' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.paymentMethodsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un método de pago por ID' })
  @ApiParam({ name: 'id', description: 'ID del método de pago', type: 'number' })
  @ApiResponse({ status: 200, description: 'Método de pago actualizado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 404, description: 'Método de pago no encontrado' })
  @ApiResponse({ status: 409, description: 'Conflicto al actualizar el método de pago' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePaymentMethodDto: UpdatePaymentMethodDto) {
    return this.paymentMethodsService.update(id, updatePaymentMethodDto);
  }

  @Patch(':id/deactivate')
  @ApiOperation({ summary: 'Desactivar un método de pago' })
  @ApiParam({ name: 'id', description: 'ID del método de pago', type: 'number' })
  @ApiResponse({ status: 200, description: 'Método de pago desactivado exitosamente' })
  @ApiResponse({ status: 404, description: 'Método de pago no encontrado' })
  deactivate(@Param('id', ParseIntPipe) id: number) {
    return this.paymentMethodsService.deactivate(id);
  }

  @Patch(':id/activate')
  @ApiOperation({ summary: 'Activar un método de pago' })
  @ApiParam({ name: 'id', description: 'ID del método de pago', type: 'number' })
  @ApiResponse({ status: 200, description: 'Método de pago activado exitosamente' })
  @ApiResponse({ status: 404, description: 'Método de pago no encontrado' })
  activate(@Param('id', ParseIntPipe) id: number) {
    return this.paymentMethodsService.activate(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Eliminar un método de pago por ID' })
  @ApiParam({ name: 'id', description: 'ID del método de pago', type: 'number' })
  @ApiResponse({ status: 204, description: 'Método de pago eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Método de pago no encontrado' })
  @ApiResponse({ status: 409, description: 'No se puede eliminar porque tiene pagos asociados' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.paymentMethodsService.remove(id);
  }
}
