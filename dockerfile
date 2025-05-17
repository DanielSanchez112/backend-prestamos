# Dockerfile
FROM node:18

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia e instalar los archivos necesarios
COPY package*.json ./
COPY prisma ./prisma/
RUN npm install
RUN npx prisma generate

# Copia todo el código fuente
COPY . .

# Expone el puerto de la app
EXPOSE 3000
RUN npm run build

# Comando para iniciar la app en desarrollo
CMD ["npm", "run", "start:dev"]
