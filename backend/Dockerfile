# Utiliser une image de base officielle pour PHP
FROM php:8.1-apache

# Installer les extensions PHP nécessaires (ajoutez les extensions dont vous avez besoin)
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Activer les modules Apache nécessaires
RUN a2enmod rewrite

# Copier le code source dans le répertoire approprié dans le conteneur
COPY . /var/www/html/

# Définir le répertoire de travail
WORKDIR /var/www/html

# Exposer le port 80 pour le conteneur
EXPOSE 80