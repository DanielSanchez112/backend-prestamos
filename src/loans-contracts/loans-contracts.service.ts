import { Injectable } from '@nestjs/common';
import { CreateLoansContractDto } from './dto/create-loans-contract.dto';
import { UpdateLoansContractDto } from './dto/update-loans-contract.dto';

@Injectable()
export class LoansContractsService {
  create(createLoansContractDto: CreateLoansContractDto) {
    return 'This action adds a new loansContract';
  }

  findAll() {
    return `This action returns all loansContracts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loansContract`;
  }

  update(id: number, updateLoansContractDto: UpdateLoansContractDto) {
    return `This action updates a #${id} loansContract`;
  }

  remove(id: number) {
    return `This action removes a #${id} loansContract`;
  }
}
