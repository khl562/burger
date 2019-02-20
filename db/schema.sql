CREATE DATABASE burger_db;   

USE burger_db;

CREATE TABLE burgers (
    id int(30) NOT NULL AUTO INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured DEFAULT true,
    primary key (id)
);

