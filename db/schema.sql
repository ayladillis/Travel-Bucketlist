-- Drops the task_saver_db if it already exists --
DROP DATABASE IF EXISTS travel_bucketlistDB;

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE travel_bucketlistDB;

USE travel_bucketlistDB;

-- Create the table tasks.
CREATE TABLE tasks (
  id int NOT NULL AUTO_INCREMENT,

  PRIMARY KEY (id)
);
