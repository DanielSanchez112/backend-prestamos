import { Module } from '@nestjs/common';
import { SslTestController } from './ssl-test.controller';
import { SslTestService } from './ssl-test.service';

@Module({
  controllers: [SslTestController],
  providers: [SslTestService],
  exports: [SslTestService]
})
export class SslTestModule {}
