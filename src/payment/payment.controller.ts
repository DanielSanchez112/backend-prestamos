import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('payment')
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been created.' })
  @ApiResponse({ status: 403, description: 'The record has been forbbiden.' })
  @ApiResponse({ status: 409, description: 'Conflict of existence.' })
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'The records have been successfully retrieved.' })
  @ApiResponse({ status: 404, description: 'No records found.' })
  @ApiResponse({ status: 403, description: 'The records have been forbbiden.' })
  findAll() {
    return this.paymentService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'The record has been successfully retrieved.' })
  @ApiResponse({ status: 404, description: 'No record found.' })
  @ApiResponse({ status: 403, description: 'The record has been forbbiden.' })
  findOne(@Param('id') id: string) {
    return this.paymentService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'The record has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'No record found.' })
  @ApiResponse({ status: 403, description: 'The record has been forbbiden.' })
  update(@Param('id') id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.paymentService.update(+id, updatePaymentDto);
  }

    @Patch(':id/activateStatus')
  @ApiResponse({ status: 200, description: 'The status has been successfully updated to active.' })
  @ApiResponse({ status: 404, description: 'No record found.' })
  @ApiResponse({ status: 403, description: 'The record has been forbbiden.' })
  updateStatusUp(@Param('id') id: string) {
    return this.paymentService.changeStatusTrue(+id);
  }

  @Patch(':id/deactivateStatus')
  @ApiResponse({ status: 200, description: 'The status has been successfully updated to inactive.' })
  @ApiResponse({ status: 404, description: 'No record found.' })
  @ApiResponse({ status: 403, description: 'The record has been forbbiden.' })
  updateStatusDown(@Param('id') id: string) {
    return this.paymentService.changeStatusFalse(+id);
  }

  @Delete(':id')
  @ApiResponse({ status: 204, description: 'The record has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'No record found.' })
  @ApiResponse({ status: 403, description: 'The record has been forbbiden.' })
  remove(@Param('id') id: string) {
    return this.paymentService.remove(+id);
  }
}
