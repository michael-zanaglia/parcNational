-- MySQL dump 10.13  Distrib 8.0.39, for Linux (x86_64)
--
-- Host: localhost    Database: mercantour
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `billets`
--

DROP TABLE IF EXISTS `billets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `billets` (
  `id_billet` int NOT NULL AUTO_INCREMENT,
  `numero` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `purchase_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `come_at` datetime NOT NULL,
  `tourist_number` int DEFAULT NULL,
  `id_user` int DEFAULT NULL,
  `id_circuit` int DEFAULT NULL,
  `id_status` int DEFAULT NULL,
  PRIMARY KEY (`id_billet`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billets`
--

LOCK TABLES `billets` WRITE;
/*!40000 ALTER TABLE `billets` DISABLE KEYS */;
INSERT INTO `billets` VALUES (1,'123456','2024-09-25 09:55:10','2024-09-25 09:52:30',1,1,1,1),(2,'1234567','2024-09-25 09:55:10','2024-09-25 09:52:30',2,2,2,2);
/*!40000 ALTER TABLE `billets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `campings`
--

DROP TABLE IF EXISTS `campings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `campings` (
  `id_camping` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `descritpion` text COLLATE utf8mb4_general_ci,
  `adresse` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `max_allowed` int DEFAULT NULL,
  `horraires` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `photos` text COLLATE utf8mb4_general_ci,
  `id_status` int DEFAULT NULL,
  `id_placetype` int DEFAULT NULL,
  PRIMARY KEY (`id_camping`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campings`
--

LOCK TABLES `campings` WRITE;
/*!40000 ALTER TABLE `campings` DISABLE KEYS */;
INSERT INTO `campings` VALUES (1,'Camping des cheuvreuils','ya d chevreuil','85 avenue des cheuvreils',0.00,8,'16h-17h','/photos/photo1.png\r\n/photos/photo2.png',NULL,NULL);
/*!40000 ALTER TABLE `campings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `circuits`
--

DROP TABLE IF EXISTS `circuits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `circuits` (
  `id_circuit` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `descritpion` text COLLATE utf8mb4_general_ci,
  `adresse` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `max_allowed` int DEFAULT NULL,
  `horraires` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `photos` text COLLATE utf8mb4_general_ci,
  `id_status` int DEFAULT NULL,
  `id_placetype` int DEFAULT NULL,
  PRIMARY KEY (`id_circuit`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `circuits`
--

LOCK TABLES `circuits` WRITE;
/*!40000 ALTER TABLE `circuits` DISABLE KEYS */;
INSERT INTO `circuits` VALUES (1,'circuit des animal','viendez decouvrir les meilleurs animals de la région','85 avenue des animals',50.00,2,'10h-24h',NULL,1,1);
/*!40000 ALTER TABLE `circuits` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commentaires`
--

DROP TABLE IF EXISTS `commentaires`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `commentaires` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` text COLLATE utf8mb4_general_ci,
  `published_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_user` int DEFAULT NULL,
  `id_information` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commentaires`
--

LOCK TABLES `commentaires` WRITE;
/*!40000 ALTER TABLE `commentaires` DISABLE KEYS */;
INSERT INTO `commentaires` VALUES (1,'super article, j\'ai remis ma vie en question!','2024-09-25 13:04:27',1,1),(2,'je suis daccord avec le connard d\'au dessus','2024-09-25 13:04:27',2,1);
/*!40000 ALTER TABLE `commentaires` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `index_photos`
--

DROP TABLE IF EXISTS `index_photos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `index_photos` (
  `id_index_photos` int NOT NULL AUTO_INCREMENT,
  `photo` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id_index_photos`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `index_photos`
--

LOCK TABLES `index_photos` WRITE;
/*!40000 ALTER TABLE `index_photos` DISABLE KEYS */;
INSERT INTO `index_photos` VALUES (1,'https://placecats.com/bella/128/128',''),(2,'https://placecats.com/bella/256/256','');
/*!40000 ALTER TABLE `index_photos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `info_photos`
--

DROP TABLE IF EXISTS `info_photos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `info_photos` (
  `id_info_photo` int NOT NULL AUTO_INCREMENT,
  `photo` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id_info_photo`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `info_photos`
--

LOCK TABLES `info_photos` WRITE;
/*!40000 ALTER TABLE `info_photos` DISABLE KEYS */;
INSERT INTO `info_photos` VALUES (1,'chat');
/*!40000 ALTER TABLE `info_photos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `info_type`
--

DROP TABLE IF EXISTS `info_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `info_type` (
  `id_info_type` int NOT NULL AUTO_INCREMENT,
  `type` enum('annonce','actu') COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id_info_type`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `info_type`
--

LOCK TABLES `info_type` WRITE;
/*!40000 ALTER TABLE `info_type` DISABLE KEYS */;
INSERT INTO `info_type` VALUES (1,'annonce'),(2,'actu');
/*!40000 ALTER TABLE `info_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `informations`
--

DROP TABLE IF EXISTS `informations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `informations` (
  `id_information` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_general_ci,
  `published_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_info_photos` int DEFAULT NULL,
  `id_info_type` int DEFAULT NULL,
  PRIMARY KEY (`id_information`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `informations`
--

LOCK TABLES `informations` WRITE;
/*!40000 ALTER TABLE `informations` DISABLE KEYS */;
INSERT INTO `informations` VALUES (1,'info','description totalement bien','2024-09-25 13:13:33',1,1),(2,'info2','description totalement bien','2024-09-25 13:13:33',1,2);
/*!40000 ALTER TABLE `informations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `placetype`
--

DROP TABLE IF EXISTS `placetype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `placetype` (
  `id_placetype` int NOT NULL AUTO_INCREMENT,
  `placetype` enum('montagne','riviere','foret') COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id_placetype`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `placetype`
--

LOCK TABLES `placetype` WRITE;
/*!40000 ALTER TABLE `placetype` DISABLE KEYS */;
INSERT INTO `placetype` VALUES (1,'montagne'),(2,'riviere'),(3,'foret'),(4,NULL);
/*!40000 ALTER TABLE `placetype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservations`
--

DROP TABLE IF EXISTS `reservations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservations` (
  `id_reservation` int NOT NULL AUTO_INCREMENT,
  `numero` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `purchase_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `come_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `tourist_number` int DEFAULT NULL,
  `id_user` int DEFAULT NULL,
  `id_camping` int DEFAULT NULL,
  `id_status` int DEFAULT NULL,
  PRIMARY KEY (`id_reservation`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservations`
--

LOCK TABLES `reservations` WRITE;
/*!40000 ALTER TABLE `reservations` DISABLE KEYS */;
INSERT INTO `reservations` VALUES (1,'4256185623','2024-09-25 13:16:52','2024-09-25 13:16:52',1,1,2,1);
/*!40000 ALTER TABLE `reservations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status` (
  `id_status` int NOT NULL AUTO_INCREMENT,
  `status` enum('ouvert','ferme','ferme def','ferme temp','travaux','complet','desactive','actif','en attente','annule') COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id_status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `firstname` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `registerdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gender` enum('h','f') COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pfp` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `role` enum('user','admin','red') COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'jm','','Michel','Jean','jeanmichel@free.fr','1922-04-03','2024-09-25 09:56:50',NULL,NULL,NULL),(4,'Rhubarb','$2y$10$NCOagibIM.XgmWW92qFhtOzLdfyvtzsinTjSqoZYTV..L5UWCKvuC','Mathéo','Gass','matheogass@outlook.com','2007-01-22','2024-10-01 09:11:20','h',NULL,'user'),(5,'lafemmedejeanmichel','$2y$10$/Mb3oW/HPoU3VuVWCy9NU.4yoJ6ANvp5jBKObAv6T94.YeRRyZlp2','Orange','Jo','lafemmedejeanmichel@hotmail.fr','1875-10-04','2024-10-02 12:33:14','f',NULL,'user'),(6,'joe_la_baignoire_93','$2y$10$PH8XfT28QR8R9p26OO1dM.N8LVTUxJU1kjvTpF.rm2.WY1SkLzWxC','Judas','Bricot','joe.baignoire@nicovideo.jp','1994-05-04','2024-10-02 12:34:32','h',NULL,'user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-03 11:57:05
