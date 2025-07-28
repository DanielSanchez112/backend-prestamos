import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiProperty } from '@nestjs/swagger';
import { SslTestService } from './ssl-test.service';
import { Request } from 'express';

class SslTestDto {
  @ApiProperty({
    example: 'Test message for SSL verification',
    description: 'Mensaje de prueba para verificar cifrado SSL/TLS'
  })
  message: string;
}

@ApiTags('SSL/TLS Testing')
@Controller('ssl-test')
export class SslTestController {
  constructor(private readonly sslTestService: SslTestService) {}

  @Get('status')
  @ApiOperation({
    summary: 'Verificar estado SSL/TLS',
    description: 'Endpoint para verificar que la conexión SSL/TLS está funcionando correctamente'
  })
  @ApiResponse({
    status: 200,
    description: 'SSL/TLS está funcionando correctamente',
    example: {
      ssl: true,
      protocol: 'TLS 1.3',
      cipher: 'ECDHE-RSA-AES256-GCM-SHA384',
      timestamp: '2024-01-15T10:30:00.000Z',
      secure: true
    }
  })
  getSslStatus(@Req() request: Request) {
    return this.sslTestService.checkSslStatus(request);
  }

  @Post('echo')
  @ApiOperation({
    summary: 'Echo cifrado SSL/TLS',
    description: 'Envía un mensaje y lo devuelve cifrado para verificar la comunicación segura'
  })
  @ApiResponse({
    status: 200,
    description: 'Mensaje procesado con cifrado SSL/TLS',
    example: {
      originalMessage: 'Test message for SSL verification',
      encryptedTransmission: true,
      responseTime: '15ms',
      securityHeaders: {
        'Strict-Transport-Security': 'max-age=31536000',
        'X-Content-Type-Options': 'nosniff'
      }
    }
  })
  echoSecure(@Body() sslTestDto: SslTestDto, @Req() request: Request) {
    return this.sslTestService.processSecureMessage(sslTestDto, request);
  }

  @Get('certificate-info')
  @ApiOperation({
    summary: 'Información del certificado SSL',
    description: 'Obtiene información detallada del certificado SSL/TLS en uso'
  })
  @ApiResponse({
    status: 200,
    description: 'Información del certificado SSL',
    example: {
      issuer: 'Prestamos API',
      subject: 'localhost',
      validFrom: '2024-01-01T00:00:00.000Z',
      validTo: '2025-01-01T00:00:00.000Z',
      serialNumber: '1234567890',
      signatureAlgorithm: 'sha256WithRSAEncryption',
      keySize: 2048
    }
  })
  getCertificateInfo() {
    return this.sslTestService.getCertificateDetails();
  }
}
