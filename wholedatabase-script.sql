-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: sancrisoftdatabase
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `orders_fulfilled`
--

DROP TABLE IF EXISTS `orders_fulfilled`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders_fulfilled` (
  `order_number` int NOT NULL AUTO_INCREMENT,
  `client_name` varchar(120) NOT NULL,
  `client_ID` int NOT NULL,
  `client_address` text NOT NULL,
  `client_phone` char(10) DEFAULT NULL,
  `client_email` varchar(50) NOT NULL,
  `order_total` decimal(15,2) NOT NULL,
  PRIMARY KEY (`order_number`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders_fulfilled`
--

LOCK TABLES `orders_fulfilled` WRITE;
/*!40000 ALTER TABLE `orders_fulfilled` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders_fulfilled` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_list`
--

DROP TABLE IF EXISTS `products_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_list` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(200) NOT NULL,
  `product_category` varchar(100) NOT NULL,
  `product_description` text NOT NULL,
  `product_image` varchar(200) NOT NULL,
  `product_price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_list`
--

LOCK TABLES `products_list` WRITE;
/*!40000 ALTER TABLE `products_list` DISABLE KEYS */;
INSERT INTO `products_list` VALUES (1,'Alexa custom','amazon','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1543512214-318c7553f230?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',145.80),(2,'Tennis Adidas','adidas','Unique adidas brigns a new concept for the comfort while you run','https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',150.80),(3,'Curlogy','beauty','Great cream for Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1556228578-dd539282b964?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1554&q=80',45.30),(4,'Brown drawer','face','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1556228841-a3c527ebefe5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=624&q=80',80.45),(5,'Coco oil','body care','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',49.40),(6,'Android Smartwatch','Tech','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=989&q=80',240.50),(7,'In the Air Snickers','Clothes','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=643&q=80',75.80),(8,'Awesome socks','Feets','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1535486607281-4fc90307a8bb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',4.80),(9,'Men Vintage\'s Kit','Kits','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',125.20),(10,'Fashion\'s essentials Kit','Kits','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=701&q=80',220.40),(11,'Gucci face kit','Face kits','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1527633412983-d80af308e660?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',430.20),(12,'Rayban Classic sunglasses','sunglasses','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',40.20),(13,'Traveler\'s backpack','backpack','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80',35.80),(14,'Traveler\'s survival kit','kits','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1513116476489-7635e79feb27?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=984&q=80',88.40),(15,'Little plant for home','plants','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',10.20),(16,'Classic backpack','backpack','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',40.50),(17,'Nike Free Red','nike','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',128.70),(18,'COCOOIL for body','body care','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',40.30),(19,'Bamboo shampoo','hair care','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',15.60),(20,'Classic watch','watch','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',37.40),(21,'Apple watch','smartwach','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80',450.40),(22,'Apple personal kit','Tech kit','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1566492625401-af879a7559f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',750.80),(23,'Channel Parfum','Fragances','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1541643600914-78b084683601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=648&q=80',150.45),(24,'Elegant watch','watch','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',95.80),(25,'Play one','consoles','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',345.75),(26,'Smartband','smartband','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1503328427499-d92d1ac3d174?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',140.78),(27,'Dry gin','liquids','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1530914547840-346c183410de?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',12.60),(28,'Season kit','kit','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1052&q=80',75.40),(29,'Giorgio Armani perfum','fragance','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1547887537-6158d64c35b3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',90.45),(30,'Gabrielle by Channel','fragance','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=676&q=80',140.43),(31,'Facial Spray with Aloe','face care','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1532086853747-99450c17fa2e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',20.00),(32,'Rainforst style backpack','backpack','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1474376962954-d8a681cc53b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',35.50),(33,'Oculus','VR','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1525459902066-be47f3dc2ee6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',89.50),(34,'Casual watch','watch','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1524738258074-f8125c6a7588?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=632&q=80',22.70),(35,'iWatch','watch','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1525980955931-afd2d0adf1c2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',160.70),(36,'Maniac drone','drones','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1523841662900-c1d9e94f0228?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',420.90),(37,'iPad Pro','iPad','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1542751110-97427bbecf20?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80',850.40),(38,'Minimal watch','watch','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=989&q=80',15.60),(39,'Just a glass','glass','No one it\'s gonna see this glass and this crazy description :P by the way, I took every product of unsplash','https://images.unsplash.com/photo-1532967895528-dd97d68f76f8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80',90.99),(40,'RedFree Nikes','nike','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1518527399940-f3f768f47dd2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1052&q=80',340.45),(41,'Leathering kit','kit','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1527627537292-b0c02afd7be5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',9.22),(42,'Body oil','oils','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1532413992378-f169ac26fff0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80',7.68),(43,'Red kit for students','kits','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80',1130.70),(44,'Amazon dot','amazon','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80',245.19),(45,'Oculus Go','VR','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat vitae massa.','https://images.unsplash.com/photo-1525459819821-1c2d33189e23?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80',124.50);
/*!40000 ALTER TABLE `products_list` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-08  3:50:02
