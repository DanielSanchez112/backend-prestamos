export interface User {
    nombre: string;
    contrasena: string;
    correo: string;
}

interface SeedData {
    users: User[];
}

export const initialData: SeedData = {
    users: [
        {
            nombre: 'Root',
            contrasena: '123456',
            correo: 'ro@gmail.com'
        }
    ]
}