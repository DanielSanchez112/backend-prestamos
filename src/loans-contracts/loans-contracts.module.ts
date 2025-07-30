import { Module } from '@nestjs/common';
import { LoansContractsService } from './loans-contracts.service';
import { LoansContractsController } from './loans-contracts.controller';

@Module({
  controllers: [LoansContractsController],
  providers: [LoansContractsService],
})
export class LoansContractsModule {}
