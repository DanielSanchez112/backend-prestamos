import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as fs from 'fs';

async function bootstrap() {
  let httpsOptions: any = undefined; // Cambiar tipo para evitar error TypeScript
  let serverUrl = 'http://localhost:3000';
  let serverType = 'HTTP';

  // Verificar si existen los certificados SSL
  const certPath = './certs/certificate.pem';
  const keyPath = './certs/private-key.pem';

  if (fs.existsSync(certPath) && fs.existsSync(keyPath)) {
    try {
      httpsOptions = {
        key: fs.readFileSync(keyPath),
        cert: fs.readFileSync(certPath),
      };
      serverUrl = 'https://localhost:3000';
      serverType = 'HTTPS';
      console.log('🔐 Certificados SSL encontrados, iniciando con HTTPS');
    } catch (error) {
      console.warn('⚠️  Error leyendo certificados SSL, iniciando con HTTP:', error.message);
      httpsOptions = undefined;
    }
  } else {
    console.log('📝 Certificados SSL no encontrados, iniciando con HTTP');
    console.log('💡 Para habilitar HTTPS ejecuta: npm run generate:certs');
  }

  // Crear aplicación con configuración condicional
  const appOptions = httpsOptions ? { httpsOptions } : {};
  const app = await NestFactory.create(AppModule, appOptions);

  // CORS configuration adaptable
  app.enableCors({
    origin: [
      'http://localhost:3001', 
      'https://localhost:3001', 
      'http://localhost:3000',
      'https://localhost:3000'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe());

  // Swagger configuration adaptable
  const config = new DocumentBuilder()
    .setTitle('Préstamos API')
    .setDescription('API para gestión de préstamos')
    .setVersion('1.0')
    .addServer(serverUrl, `Development ${serverType} Server`)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
  console.log(`🚀 ${serverType} Server running on ${serverUrl}`);
  console.log(`📚 Swagger docs available at ${serverUrl}/api/docs`);
  
  if (!httpsOptions) {
    console.log('');
    console.log('🔧 Para habilitar HTTPS:');
    console.log('   1. npm run generate:certs');
    console.log('   2. Reinicia el servidor');
    console.log('   3. Accede a https://localhost:3000');
  }
}
bootstrap();
