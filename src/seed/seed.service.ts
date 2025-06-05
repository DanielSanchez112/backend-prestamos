import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExecuteSeedDto } from './dto/execute-seed.dto';
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
import { initialData, User } from './data/seed-data';

@Injectable()
export class SeedService {
  
  constructor(
    private readonly configService: ConfigService,
    private readonly usersService: UsersService
  ) {}

  async execute(executeSeedDto: ExecuteSeedDto) {
    if (executeSeedDto.password !== this.configService.get<string>('PASSWORD_SEED'))
      throw new UnauthorizedException('Seeding password is incorrect');

    await this.createUsers(initialData.users);
  }

  private async createUsers(users: User[])  {
    users.map(user => {
      this.usersService.create({
        ...user, 
        fechaCreacion: new Date(), 
				fechaActualizacion: new Date(), 
				estatus: true
      });
    });
  }
}
