# Dockerfile
FROM node:18-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia e instalar los archivos necesarios
COPY package*.json ./
COPY prisma ./prisma/

# COPY prisma ./prisma/
RUN npm install


# Copia todo el código fuente
COPY . .

# Instala genera los archivos de Prisma
RUN npx prisma generate

# Expone el puerto de la app
EXPOSE 3000

# Comando para iniciar la app en desarrollo
CMD ["npm", "run", "start:dev"]
