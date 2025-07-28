import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
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
import { PaymentModule } from './payment/payment.module';
import { SslTestModule } from './ssl-test/ssl-test.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule, 
    EstadosModule,
    AuthModule,
    SeedModule,
    ClientsModule,
    LoansModule,
    PaymentModule,
    SslTestModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Middleware para forzar HTTPS en producción
    consumer
      .apply((req, res, next) => {
        if (process.env.NODE_ENV === 'production' && !req.secure && req.get('x-forwarded-proto') !== 'https') {
          return res.redirect(301, `https://${req.get('host')}${req.url}`);
        }
        next();
      })
      .forRoutes('*');
  }
}
