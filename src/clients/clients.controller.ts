import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been created.' })
  @ApiResponse({ status: 403, description: 'The record has been forbbiden.' })
  @ApiResponse({ status: 409, description: 'Conflict of existence.' })
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'The records have been successfully retrieved.' })
  @ApiResponse({ status: 404, description: 'No records found.' })
  @ApiResponse({ status: 403, description: 'The records have been forbbiden.' })
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'The record has been successfully retrieved.' })
  @ApiResponse({ status: 404, description: 'No record found.' })
  @ApiResponse({ status: 403, description: 'The record has been forbbiden.' })
  findOne(@Param('id') id: string) {
    return this.clientsService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'The record has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'No record found.' })
  @ApiResponse({ status: 403, description: 'The record has been forbbiden.' })
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.update(+id, updateClientDto);
  }

  @Patch(':id/activateStatus')
  @ApiResponse({ status: 200, description: 'The status has been successfully updated to active.' })
  @ApiResponse({ status: 404, description: 'No record found.' })
  @ApiResponse({ status: 403, description: 'The record has been forbbiden.' })
  updateStatusUp(@Param('id') id: string) {
    return this.clientsService.changeStatusTrue(+id);
  }

  @Patch(':id/deactivateStatus')
  @ApiResponse({ status: 200, description: 'The status has been successfully updated to inactive.' })
  @ApiResponse({ status: 404, description: 'No record found.' })
  @ApiResponse({ status: 403, description: 'The record has been forbbiden.' })
  updateStatusDown(@Param('id') id: string) {
    return this.clientsService.changeStatusFalse(+id);
  }

  @Delete(':id')
  @ApiResponse({ status: 204, description: 'The record has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'No record found.' })
  @ApiResponse({ status: 403, description: 'The record has been forbbiden.' })
  remove(@Param('id') id: string) {
    return this.clientsService.remove(+id);
  }
}
