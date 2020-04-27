-- MySQL dump 10.13  Distrib 5.7.29, for Linux (x86_64)
--
-- Host: localhost    Database: ANDREWSDREAMLLC
-- ------------------------------------------------------
-- Server version	5.7.29-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `about_us`
--

DROP TABLE IF EXISTS `about_us`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `about_us` (
  `DESCRIPTION` text NOT NULL,
  `COMPANY_ADDRESS` varchar(255) NOT NULL,
  `COMPANY_CONTACT_NUMBER` varchar(30) NOT NULL,
  `COMPANY_FAX_NUMBER` varchar(30) DEFAULT NULL,
  `COMPANY_EMAIL` varchar(45) NOT NULL,
  `COMPANY_FACEBOOK` varchar(45) DEFAULT NULL,
  `DESCRIPTION_ID` varchar(45) NOT NULL,  PRIMARY KEY (`DESCRIPTION_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about_us`
--

LOCK TABLES `about_us` WRITE;
/*!40000 ALTER TABLE `about_us` DISABLE KEYS */;
INSERT INTO `about_us` VALUES ('Buy - Sell - Rent - Invest','300 Olympia Dr. Troy, MI 48084','(248) 390-0738','Fax placeholder','steve@andrewsdreamllc.com','https://www.facebook.com/Andrewsdreamllc/','1');
/*!40000 ALTER TABLE `about_us` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contractor`
--

DROP TABLE IF EXISTS `contractor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contractor` (
  `JOB_KEY` int(11) NOT NULL AUTO_INCREMENT,
  `JOB_NAME` varchar(45) NOT NULL,
  `JOB_DESCRIPTION` text,
  `JOB_ADDRESS` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`JOB_KEY`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contractor`
--

LOCK TABLES `contractor` WRITE;
/*!40000 ALTER TABLE `contractor` DISABLE KEYS */;
/*!40000 ALTER TABLE `contractor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_page`
--

DROP TABLE IF EXISTS `home_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `home_page` (
  `HOME_PARAGRAPH_TEXT` text NOT NULL,
  `HOME_IMAGE` blob,
  `HOME_VIDEO_URL` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_page`
--

LOCK TABLES `home_page` WRITE;
/*!40000 ALTER TABLE `home_page` DISABLE KEYS */;
INSERT INTO `home_page` VALUES ('Steve Ehrman\'\'s description placeholder',NULL,'<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/NpEaa2P7qZI\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>');
/*!40000 ALTER TABLE `home_page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `property`
--

DROP TABLE IF EXISTS `property`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `property` (
  `PROPERTY_KEY` int(11) NOT NULL AUTO_INCREMENT,
  `PROPERTY_NAME` varchar(255) NOT NULL,
  `PROPERTY_IDENTIFIER` char(1) NOT NULL,
  `PROPERTY_PRICE` int(11) NOT NULL,
  `PROPERTY_TYPE` varchar(45) NOT NULL,
  `PROPERTY_STREET_ADDRESS1` varchar(255) NOT NULL,
  `PROPERTY_STREET_ADDRESS2` varchar(255) DEFAULT NULL,
  `PROPERTY_CITY` varchar(45) NOT NULL,
  `PROPERTY_STATE` varchar(45) NOT NULL,
  `PROPERTY_COUNTRY` varchar(45) NOT NULL,
  `PROPERTY_ZIP` int(11) NOT NULL,
  `PROPERTY_AVAILABLE` tinyint(1) NOT NULL,
  `PROPERTY_DATE` datetime NOT NULL,
  PRIMARY KEY (`PROPERTY_KEY`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `property`
--

LOCK TABLES `property` WRITE;
/*!40000 ALTER TABLE `property` DISABLE KEYS */;
INSERT INTO `property` VALUES (2,'-','-',0,'dogbreath','dogbreath','dogbereth','sdf','-','-',0,0,'2020-04-19 13:13:07'),(3,'-','-',0,'-','-','-','-','-','-',0,0,'2020-04-18 13:46:42');
/*!40000 ALTER TABLE `property` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `property_amenity`
--

DROP TABLE IF EXISTS `property_amenity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `property_amenity` (
  `PROPERTY_KEY` int(11) NOT NULL,
  `PROPERTY_SQUARE_FEET` decimal(10,0) NOT NULL,
  `PROPERTY_BED` int(11) NOT NULL,
  `PROPERTY_BATH` decimal(10,0) NOT NULL,
  `PROPERTY_PARKING` varchar(45) DEFAULT NULL,
  `PROPERTY_PET_FRIENDLY` tinyint(4) DEFAULT NULL,
  `PROPERTY_ELECTRICITY` tinyint(4) DEFAULT NULL,
  `PROPERTY_WATER_SEWAGE_TRASH` tinyint(4) DEFAULT NULL,
  `PROPERTY_LEASE_MIN` varchar(45) DEFAULT NULL,
  `PROPERTY_LEASE_MAX` varchar(45) DEFAULT NULL,
  `PROPERTY_NOTE` text,
  KEY `PROPRTY_KEY_idx` (`PROPERTY_KEY`),
  CONSTRAINT `PROPRTY_KEY` FOREIGN KEY (`PROPERTY_KEY`) REFERENCES `property` (`PROPERTY_KEY`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `property_amenity`
--

LOCK TABLES `property_amenity` WRITE;
/*!40000 ALTER TABLE `property_amenity` DISABLE KEYS */;
INSERT INTO `property_amenity` VALUES (2,0,0,0,'-',0,'-','-','-','-','-'),(3,0,0,0,'-',0,'-','-','-','-','-');
/*!40000 ALTER TABLE `property_amenity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `property_media`
--

DROP TABLE IF EXISTS `property_media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `property_media` (
  `PROPERTY_KEY` int(11) NOT NULL,
  `PROPERTY_IMAGE` text,
  `PROPERTY_VIDEO` text,
  KEY `PROPERTY_KEY_idx` (`PROPERTY_KEY`),
  CONSTRAINT `PROPERTY_KEY` FOREIGN KEY (`PROPERTY_KEY`) REFERENCES `property` (`PROPERTY_KEY`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `property_media`
--

LOCK TABLES `property_media` WRITE;
/*!40000 ALTER TABLE `property_media` DISABLE KEYS */;
/*!40000 ALTER TABLE `property_media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sale_property`
--

DROP TABLE IF EXISTS `sale_property`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sale_property` (
  `SALE_PROPERTY_KEY` int(11) NOT NULL AUTO_INCREMENT,
  `SALE_PROPERTY_DESCRIPTION` text NOT NULL,
  PRIMARY KEY (`SALE_PROPERTY_KEY`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sale_property`
--

LOCK TABLES `sale_property` WRITE;
/*!40000 ALTER TABLE `sale_property` DISABLE KEYS */;
/*!40000 ALTER TABLE `sale_property` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-19 13:16:14