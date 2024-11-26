FROM ubuntu:latest

# Instalar Node.js y dependencias del sistema
RUN apt-get update && apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Crear directorio de la aplicación
WORKDIR /app

# Copiar archivos del proyecto al contenedor
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install next@14.0.4 && npm install

# Construir la aplicación
COPY . .


# Exponer el puerto y establecer el comando de inicio
EXPOSE 3000
CMD ["npm", "run", "dev"]
