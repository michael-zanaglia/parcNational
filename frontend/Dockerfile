# Utiliser une image 
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

COPY package*.json ./
# Installer les extensions nécessaires 

RUN npm install


# Copier le code source dans le répertoire approprié dans le conteneur
COPY . .

# Exposer le port 5173 pour le conteneur
EXPOSE 5173

CMD ["npm", "run", "dev-exposed"]