CREATE DATABASE burgersdb;
USE burgersdb;

CREATE TABLE burgers (
    id_burger INT NOT NULL AUTO_INCREMENT,
    burgerName VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id_burger)
)