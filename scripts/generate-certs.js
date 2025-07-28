const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const certsDir = path.join(__dirname, '../certs');

// Crear directorio de certificados si no existe
if (!fs.existsSync(certsDir)) {
  fs.mkdirSync(certsDir, { recursive: true });
}

console.log('🔧 Generando certificados SSL para desarrollo...');

// Generar clave privada
exec('openssl genrsa -out certs/private-key.pem 2048', (error, stdout, stderr) => {
  if (error) {
    console.error('❌ Error generando clave privada:', error.message);
    console.log('💡 Asegúrate de tener OpenSSL instalado');
    console.log('💡 En Windows: https://slproweb.com/products/Win32OpenSSL.html');
    return;
  }
  console.log('✅ Clave privada generada');

  // Generar certificado autofirmado simple (compatible con Windows)
  const certCommand = `openssl req -new -x509 -key certs/private-key.pem -out certs/certificate.pem -days 365 -subj "/C=MX/ST=Estado/L=Ciudad/O=Prestamos API/CN=localhost"`;
  
  exec(certCommand, (error, stdout, stderr) => {
    if (error) {
      console.error('❌ Error generando certificado:', error.message);
      return;
    }
    console.log('✅ Certificado SSL generado');
    console.log('🔐 Certificados listos para usar con HTTPS');
    console.log('');
    console.log('📋 Próximos pasos:');
    console.log('   1. npm run start:dev');
    console.log('   2. Visita: https://localhost:3000/api/docs');
    console.log('   3. Acepta el certificado autofirmado en tu navegador');
    console.log('');
    console.log('⚠️  Nota: Es normal ver advertencias de seguridad con certificados autofirmados');
  });
});
      // Fallback para Windows
      exec(`openssl req -new -x509 -key certs/private-key.pem -out certs/certificate.pem -days 365 -subj "/C=MX/ST=Estado/L=Ciudad/O=Prestamos API/CN=localhost"`, (error, stdout, stderr) => {
        if (error) {
          console.error('Error generando certificado:', error);
          return;
        }
        console.log('✅ Certificado SSL generado (modo compatibilidad)');
        console.log('🔐 Certificados listos para usar con HTTPS');
        console.log('📋 Para probar:');
        console.log('   1. npm run start:dev');
        console.log('   2. Visita: https://localhost:3000/api/docs');
        console.log('   3. Acepta el certificado autofirmado en tu navegador');
      });
      return;
    }
    console.log('✅ Certificado SSL generado con SAN');
    console.log('🔐 Certificados listos para usar con HTTPS');
    console.log('📋 Para probar con Swagger:');
    console.log('   1. npm run start:dev');
    console.log('   2. Visita: https://localhost:3000/api/docs');
    console.log('   3. Acepta el certificado autofirmado en tu navegador');
  });
});
