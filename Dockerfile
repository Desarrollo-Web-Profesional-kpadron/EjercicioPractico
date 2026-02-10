# Imagen base con Node
FROM node:18-alpine

# Carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el proyecto
COPY . .

# Construir la app de Vite
RUN npm run build

# Instalar servidor para archivos estáticos
RUN npm install -g serve

# Exponer el puerto
EXPOSE 8080

# Comando para ejecutar la app
CMD ["serve", "-s", "dist", "-l", "8080"]
