CREATE DATABASE IF NOT EXISTS bd-venda;

USE bd-venda;

CREATE TABLE usuario (
    id_usuario INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email TEXT NOT NULL,
    endereco TEXT NOT NULL,
    senha TEXT NOT NULL
) ENGINE=InnoDB;

CREATE TABLE venda (
    id_venda INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    data_venda DATE 
) ENGINE=InnoDB;