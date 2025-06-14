import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma.service';
import { EstadosModule } from './states/estados.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, } from '@nestjs/config';
import { SeedModule } from './seed/seed.module';
import { ClientsModule } from './clients/clients.module';
import { LoansModule } from './loans/loans.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule, 
    EstadosModule,
    AuthModule,
    SeedModule,
    ClientsModule,
    LoansModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
