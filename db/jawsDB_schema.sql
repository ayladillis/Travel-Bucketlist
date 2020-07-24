CREATE DATABASE cxkauw9r1gdr2q0n;
USE cxkauw9r1gdr2q0n;

CREATE TABLE travel 
(
  id int NOT NULL AUTO_INCREMENT,
  city_name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO travel (city_name) VALUES ('Orlando');

INSERT INTO travel (city_name) VALUES ('Mexico City');
