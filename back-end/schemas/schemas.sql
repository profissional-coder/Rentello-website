-- write the database name that you use here
USE itemrental;

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
   Fullname VARCHAR (100),
   email VARCHAR (100),
   password VARCHAR (255),
   city VARCHAR (100),
   address VARCHAR (100),
   RegDate DATETIME,
   dob VARCHAR (100),
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
   
    PRIMARY KEY (id)
);

-- example:
CREATE TABLE products (
    id INT AUTO_INCREMENT NOT NULL,
   
    PRIMARY KEY (id)
);