FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración de la aplicación desde la raíz del proyecto
COPY package.json yarn.lock* ./

# Instala las dependencias de la aplicación con Yarn
RUN yarn install

# Copia el resto de los archivos de la aplicación
COPY . .

# Construye la aplicación React para producción
RUN yarn build

# Exponer el puerto 80 en el contenedor
EXPOSE 80

# Comando para iniciar la aplicación
CMD [ "yarn", "start" ]