import { PrismaClient } from "@prisma/client";
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient()

async function main(){
    const existingUsers = await prisma.usuarios.findFirst({
        where: { correo: 'admin@example.com'}
    })

    if(!existingUsers){
        await prisma.usuarios.create({
            data:{
                nombre: 'Admin',
                contrasena: await bcrypt.hash('admin123', 10),
                correo: 'admin@gmail.com',
                fechaCreacion: new Date(),
                fechaActualizacion: new Date(),
                estatus: true
            }
        })
        console.log('Admin user created successfully');
    } else {
        console.log('User already exists, skipping creation');
    }
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(() => {
        prisma.$disconnect()
    })