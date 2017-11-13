CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id int(100) NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);
