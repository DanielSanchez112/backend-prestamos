import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoansContractsService } from './loans-contracts.service';
import { CreateLoansContractDto } from './dto/create-loans-contract.dto';
import { UpdateLoansContractDto } from './dto/update-loans-contract.dto';

@Controller('loans-contracts')
export class LoansContractsController {
  constructor(private readonly loansContractsService: LoansContractsService) {}

  @Post()
  create(@Body() createLoansContractDto: CreateLoansContractDto) {
    return this.loansContractsService.create(createLoansContractDto);
  }

  @Get()
  findAll() {
    return this.loansContractsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loansContractsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoansContractDto: UpdateLoansContractDto) {
    return this.loansContractsService.update(+id, updateLoansContractDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loansContractsService.remove(+id);
  }
}
