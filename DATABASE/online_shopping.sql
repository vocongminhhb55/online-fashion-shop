-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: online_shopping
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin_type`
--

DROP TABLE IF EXISTS `admin_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `admin_type` varchar(50) DEFAULT NULL,
  `permissions` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `modified_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_type`
--

LOCK TABLES `admin_type` WRITE;
/*!40000 ALTER TABLE `admin_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin_user`
--

DROP TABLE IF EXISTS `admin_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` text,
  `name` varchar(50) DEFAULT NULL,
  `type_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `modified_at` timestamp NULL DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `age` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `type_id` (`type_id`),
  CONSTRAINT `admin_user_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `admin_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_user`
--

LOCK TABLES `admin_user` WRITE;
/*!40000 ALTER TABLE `admin_user` DISABLE KEYS */;
INSERT INTO `admin_user` VALUES (1,'admin.abc@gmail.com','$2a$10$TgxaiU1bMvt.7HqJfHwe4OWpnXhnE4h3G0awygK8KG/rLPYb1AK06','tin',NULL,NULL,NULL,NULL,NULL),(2,'admin.123@gmail.com','$2a$10$5vNucMzZWENdIAvUs5Ac2u.qKTaLc2aBtLGrdKu50Ildvi4UIQXVa','Minh',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `admin_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_item`
--

DROP TABLE IF EXISTS `cart_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `session_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `modified_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `session_id` (`session_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `cart_item_ibfk_1` FOREIGN KEY (`session_id`) REFERENCES `order_items` (`id`),
  CONSTRAINT `cart_item_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_item`
--

LOCK TABLES `cart_item` WRITE;
/*!40000 ALTER TABLE `cart_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discount`
--

DROP TABLE IF EXISTS `discount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `discount` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `desc` text,
  `discount_percent` decimal(10,0) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `modified_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discount`
--

LOCK TABLES `discount` WRITE;
/*!40000 ALTER TABLE `discount` DISABLE KEYS */;
/*!40000 ALTER TABLE `discount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `total` decimal(10,0) DEFAULT NULL,
  `payment_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `modified_at` timestamp NULL DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `apartment` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `zip` varchar(45) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `firstName` varchar(45) DEFAULT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `payment_id` (`payment_id`),
  CONSTRAINT `order_details_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `order_details_ibfk_2` FOREIGN KEY (`payment_id`) REFERENCES `payment_details` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
INSERT INTO `order_details` VALUES (2,NULL,469,NULL,NULL,NULL,'227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5','','Vietnam','Ho Chi Minh city','asd','666','0825337182','hungbui128@gmail.com','Quoc Hung','Bui'),(3,NULL,469,NULL,NULL,NULL,'227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5','','Vietnam','Ho Chi Minh city','asd','666','0825337182','hungbui128@gmail.com','Quoc Hung','Bui'),(4,NULL,207,NULL,NULL,NULL,'227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5','','Vietnam','Ho Chi Minh city','asd','666','0825337182','hungbui128@gmail.com','Quoc Hung','Bui'),(5,NULL,124,NULL,NULL,NULL,'227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5','','Vietnam','Ho Chi Minh city','asd','666','0825337182','hungbui128@gmail.com','Quoc Hung','Bui'),(6,NULL,344,NULL,NULL,NULL,'227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5','','Vietnam','Ho Chi Minh city','asd','666','0825337182','hungbui128@gmail.com','Quoc Hung','Bui'),(7,NULL,271,NULL,NULL,NULL,'227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5','','Vietnam','Ho Chi Minh city','asd','666','0825337182','hungbui128@gmail.com','Quoc Hung','Bui'),(8,NULL,340,NULL,NULL,NULL,'227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5','','Vietnam','Hồ Chí Minh','asd','666','0825337182','hungbui128@gmail.com','Quoc Hung','Bui'),(9,NULL,340,NULL,NULL,NULL,'227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5','','Vietnam','Hồ Chí Minh','asd','666','0825337182','hungbui128@gmail.com','Quoc Hung','Bui');
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `product_id` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `modified_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order_details` (`id`),
  CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_details`
--

DROP TABLE IF EXISTS `payment_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `amount` decimal(10,0) DEFAULT NULL,
  `payment_type` varchar(50) DEFAULT NULL,
  `provider` varchar(50) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `modified_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_details`
--

LOCK TABLES `payment_details` WRITE;
/*!40000 ALTER TABLE `payment_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `long_desc` text,
  `short_desc` text,
  `category` varchar(50) DEFAULT NULL,
  `tags` varchar(50) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `discount_id` int DEFAULT NULL,
  `img_main_1` text,
  `img_main_2` text,
  `img_main_3` text,
  `img_main_4` text,
  `img_thumb_1` text,
  `img_thumb_2` text,
  `img_thumb_3` text,
  `img_thumb_4` text,
  `created_at` timestamp NULL DEFAULT NULL,
  `modified_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `discount_id` (`discount_id`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`discount_id`) REFERENCES `discount` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (2,'b',NULL,NULL,NULL,'men','clothing',67,NULL,'../../img/product/product-2.jpg','../../img/product/product-2.jpg','../../img/product/product-2.jpg','../../img/product/product-2.jpg','../../img/product/product-2.jpg','../../img/product/product-2.jpg','../../img/product/product-2.jpg','../../img/product/product-2.jpg',NULL,NULL,NULL),(3,'d',NULL,NULL,NULL,'men','shoes',60,NULL,'../../img/product/product-3.jpg','../../img/product/product-3.jpg','../../img/product/product-3.jpg','../../img/product/product-3.jpg','../../img/product/product-3.jpg','../../img/product/product-3.jpg','../../img/product/product-3.jpg','../../img/product/product-3.jpg',NULL,NULL,NULL),(4,'v',NULL,NULL,NULL,'men','clothing',55,NULL,'../../img/product/product-4.jpg','../../img/product/product-4.jpg','../../img/product/product-4.jpg','../../img/product/product-4.jpg','../../img/product/product-4.jpg','../../img/product/product-4.jpg','../../img/product/product-4.jpg','../../img/product/product-4.jpg',NULL,NULL,NULL),(6,'r',NULL,NULL,NULL,'women','accessories',790,NULL,'../../img/product/product-6.jpg','../../img/product/product-6.jpg','../../img/product/product-6.jpg','../../img/product/product-6.jpg','../../img/product/product-6.jpg','../../img/product/product-6.jpg','../../img/product/product-6.jpg','../../img/product/product-6.jpg',NULL,NULL,NULL),(7,'i',NULL,NULL,NULL,'women','bag',0,NULL,'../../img/product/product-7.jpg','../../img/product/product-7.jpg','../../img/product/product-7.jpg','../../img/product/product-7.jpg','../../img/product/product-7.jpg','../../img/product/product-7.jpg','../../img/product/product-7.jpg','../../img/product/product-7.jpg',NULL,NULL,NULL),(8,'n',NULL,NULL,NULL,'men','clothing',32,NULL,'../../img/product/product-8.jpg','../../img/product/product-8.jpg','../../img/product/product-8.jpg','../../img/product/product-8.jpg','../../img/product/product-8.jpg','../../img/product/product-8.jpg','../../img/product/product-8.jpg','../../img/product/product-8.jpg',NULL,NULL,NULL),(9,'y',NULL,NULL,NULL,'women','clothing',86,NULL,'../../img/product/product-9.jpg','../../img/product/product-9.jpg','../../img/product/product-9.jpg','../../img/product/product-9.jpg','../../img/product/product-9.jpg','../../img/product/product-9.jpg','../../img/product/product-9.jpg','../../img/product/product-9.jpg',NULL,NULL,NULL),(10,'b_1',NULL,NULL,NULL,'women','accessories',35,NULL,'../../img/product/product-10.jpg','../../img/product/product-10.jpg','../../img/product/product-10.jpg','../../img/product/product-10.jpg','../../img/product/product-10.jpg','../../img/product/product-10.jpg','../../img/product/product-10.jpg','../../img/product/product-10.jpg',NULL,NULL,NULL),(11,'q',NULL,NULL,NULL,'kids','bag',12,NULL,'../../img/product/product-11.jpg','../../img/product/product-11.jpg','../../img/product/product-11.jpg','../../img/product/product-11.jpg','../../img/product/product-11.jpg','../../img/product/product-11.jpg','../../img/product/product-11.jpg','../../img/product/product-11.jpg',NULL,NULL,NULL),(12,'w',NULL,NULL,NULL,'men','clothing',93,NULL,'../../img/product/product-12.jpg','../../img/product/product-12.jpg','../../img/product/product-12.jpg','../../img/product/product-12.jpg','../../img/product/product-12.jpg','../../img/product/product-12.jpg','../../img/product/product-12.jpg','../../img/product/product-12.jpg',NULL,NULL,NULL),(13,'n',NULL,NULL,NULL,'men','bag',84,NULL,'../../img/product/product-13.jpg','../../img/product/product-13.jpg','../../img/product/product-13.jpg','../../img/product/product-13.jpg','../../img/product/product-13.jpg','../../img/product/product-13.jpg','../../img/product/product-13.jpg','../../img/product/product-13.jpg',NULL,NULL,NULL),(14,'x',NULL,NULL,NULL,'kids','accessories',38,NULL,'../../img/product/product-14.jpg','../../img/product/product-14.jpg','../../img/product/product-14.jpg','../../img/product/product-14.jpg','../../img/product/product-14.jpg','../../img/product/product-14.jpg','../../img/product/product-14.jpg','../../img/product/product-14.jpg',NULL,NULL,NULL);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopping_session`
--

DROP TABLE IF EXISTS `shopping_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shopping_session` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `total` decimal(10,0) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `modified_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `shopping_session_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping_session`
--

LOCK TABLES `shopping_session` WRITE;
/*!40000 ALTER TABLE `shopping_session` DISABLE KEYS */;
/*!40000 ALTER TABLE `shopping_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` text,
  `name` varchar(50) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `modified_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (4,'abc@gmail.com','$2a$10$2dafTCsW3pU2FHWSZVArbOYxEE2LN6RKEaKY/nMKcrjmzGjuvV0mW','tin',NULL,NULL,NULL,NULL,NULL),(7,'admin.abc@gmail.com','$2a$10$zWI8cyN1aDiBfTFhMw3m9.ATVrxubMJIFXgTQeaJr1ttqfsiQuZC2','tin',NULL,NULL,NULL,NULL,NULL),(8,'teo@gmail.com','$2a$10$tvABaKU.aaq88KEd.d1hguASBTdjIO5InqUqB7wiRLMZ45hca9u5a','tin',NULL,NULL,NULL,NULL,NULL),(9,'abc123@gmail.com','$2a$10$XJqE6DDEMpeRbwvqXnswTuQQ6BCEQ0tmyeIDO1e7qf0ZpYlnwye4K','tin',NULL,NULL,NULL,NULL,NULL),(10,'123456@gmail.com','$2a$10$QhWc2ta1Nh7koQzmfGlbzO8/pMICyFO1wx/6bdOOO7E0/nPU1t5u2','tin',NULL,NULL,NULL,NULL,NULL),(11,'zxc@gmail.com','$2a$10$vCDI2OCc0ZbtVhbrewUvnuN/VYTGAmtsi7e.OXWuQky3ssNRzsJZO','tin',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_payment`
--

DROP TABLE IF EXISTS `user_payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `payment_type` varchar(50) DEFAULT NULL,
  `provider` varchar(50) DEFAULT NULL,
  `account_no` varchar(50) DEFAULT NULL,
  `expiry` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_payment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_payment`
--

LOCK TABLES `user_payment` WRITE;
/*!40000 ALTER TABLE `user_payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_payment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-07 13:59:04
