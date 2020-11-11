USE itemrental;

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    Fullname VARCHAR (100) NOT NULL,
    email VARCHAR (100) NOT NULL,
    password VARCHAR (255)NOT NULL,
    city VARCHAR (100)NOT NULL,
    address VARCHAR (100)NOT NULL,
    RegDate DATETIME,
    dob VARCHAR (100) NOT NULL,
    UNIQUE KEY unique_email (email),
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