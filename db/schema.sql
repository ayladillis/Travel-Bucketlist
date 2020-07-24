CREATE DATABASE travel_list_db;
USE travel_list_db;

CREATE TABLE travel 
(
  id int NOT NULL AUTO_INCREMENT,
  city_name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);