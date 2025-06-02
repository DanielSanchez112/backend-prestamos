import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode, ParseIntPipe } from '@nestjs/common';
import { EstadosService } from './estados.service';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { Estados } from '@prisma/client';

@Controller('estados')
export class EstadosController {
  constructor(private readonly estadosService: EstadosService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createEstadoDto: CreateEstadoDto): Promise<Estados> {
    return await this.estadosService.create(createEstadoDto);
  }

  @Get()
  async findAll(): Promise<Estados[]> {
    return await this.estadosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string): Promise<Estados> {
    return await this.estadosService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: string, @Body() updateEstadoDto: UpdateEstadoDto): Promise<Estados> {
    return await this.estadosService.update(+id, updateEstadoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: string): Promise<void> {
    return await this.estadosService.remove(+id);
  }
}
