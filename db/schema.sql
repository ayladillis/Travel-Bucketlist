CREATE DATABASE travel_bucketlist_db;
USE travel_bucketlist_db;

CREATE TABLE travel
(
	id int NOT NULL AUTO_INCREMENT,
	city_name varchar(255) NOT NULL,
	fly BOOLEAN DEFAULT false,
    -- createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);