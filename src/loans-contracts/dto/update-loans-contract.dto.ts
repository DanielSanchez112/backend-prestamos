import { PartialType } from '@nestjs/swagger';
import { CreateLoansContractDto } from './create-loans-contract.dto';

export class UpdateLoansContractDto extends PartialType(CreateLoansContractDto) {}
