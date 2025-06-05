import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeedService } from './seed.service';
import { ExecuteSeedDto } from './dto/execute-seed.dto';


@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Post()
  create(@Body() executeSeedDto: ExecuteSeedDto) {
    return this.seedService.execute(executeSeedDto);
  }

}
