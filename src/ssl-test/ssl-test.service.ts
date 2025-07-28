import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import * as crypto from 'crypto';
import * as fs from 'fs';

@Injectable()
export class SslTestService {
  checkSslStatus(request: Request) {
    const isSecure = request.secure || request.headers['x-forwarded-proto'] === 'https';
    const protocol = isSecure ? 'HTTPS' : 'HTTP';
    
    return {
      ssl: isSecure,
      protocol: protocol,
      warning: !isSecure ? 'Conexión no cifrada - ejecuta npm run generate:certs para habilitar HTTPS' : null,
      userAgent: request.headers['user-agent'],
      timestamp: new Date().toISOString(),
      secure: isSecure,
      headers: {
        host: request.headers.host,
        connection: request.headers.connection,
        upgradeInsecureRequests: request.headers['upgrade-insecure-requests']
      },
      connectionInfo: {
        remoteAddress: request.ip,
        encrypted: isSecure,
        method: request.method
      }
    };
  }

  processSecureMessage(messageDto: { message: string }, request: Request) {
    const startTime = Date.now();
    const isSecure = request.secure || request.headers['x-forwarded-proto'] === 'https';
    
    // Simular procesamiento cifrado
    const hash = crypto.createHash('sha256').update(messageDto.message).digest('hex');
    const responseTime = Date.now() - startTime;

    return {
      originalMessage: messageDto.message,
      messageHash: hash,
      encryptedTransmission: isSecure,
      responseTime: `${responseTime}ms`,
      securityHeaders: {
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block'
      },
      timestamp: new Date().toISOString(),
      serverProcessing: {
        nodeVersion: process.version,
        platform: process.platform,
        memoryUsage: process.memoryUsage()
      }
    };
  }

  getCertificateDetails() {
    try {
      const certPath = './certs/certificate.pem';
      const keyPath = './certs/private-key.pem';
      
      if (fs.existsSync(certPath) && fs.existsSync(keyPath)) {
        const cert = fs.readFileSync(certPath, 'utf8');
        
        return {
          issuer: 'Prestamos API (Self-Signed)',
          subject: 'localhost',
          validFrom: new Date().toISOString(),
          validTo: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
          serialNumber: crypto.randomBytes(16).toString('hex'),
          signatureAlgorithm: 'sha256WithRSAEncryption',
          keySize: 2048,
          certificatePresent: true,
          httpsEnabled: true,
          environment: 'development',
          warnings: [
            'Este es un certificado autofirmado para desarrollo',
            'No usar en producción',
            'Los navegadores mostrarán advertencias de seguridad'
          ]
        };
      } else {
        return {
          certificatePresent: false,
          httpsEnabled: false,
          message: 'Servidor ejecutándose en modo HTTP',
          instructions: [
            '1. Ejecuta: npm run generate:certs',
            '2. Reinicia el servidor',
            '3. Accede a https://localhost:3000'
          ]
        };
      }
    } catch (error) {
      return {
        error: 'Error verificando certificados',
        certificatePresent: false,
        httpsEnabled: false,
        message: 'Ejecuta npm run generate:certs para crear certificados',
        troubleshooting: [
          '1. Verifica que OpenSSL esté instalado: npm run check:openssl',
          '2. Genera certificados: npm run generate:certs',
          '3. Reinicia el servidor: npm run start:dev',
          '4. Si persiste el error, usa modo HTTP: npm run start:dev:safe'
        ]
      };
    }
  }
}
