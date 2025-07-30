import { Module } from '@nestjs/common';
import { LoansContractsService } from './loans-contracts.service';
import { LoansContractsController } from './loans-contracts.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [LoansContractsController],
  providers: [LoansContractsService, PrismaService],
})
export class LoansContractsModule {}
