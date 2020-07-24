### Schema
CREATE DATABASE travel_bucketlistDB;
USE travel_bucketlistDB;

CREATE TABLE travel_bucketlistDB;

CREATE TABLE travel 
(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(300) NOT NULL,
  place BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);
