USE itemrental;

CREATE TABLE roles (
    role_id INT AUTO_INCREMENT NOT NULL,
    type VARCHAR(50) NOT NULL,
    PRIMARY KEY (role_id)
);

CREATE TABLE users (
    user_id INT AUTO_INCREMENT NOT NULL,
    role_id INT(5),
    Fullname VARCHAR (100) NOT NULL,
    email VARCHAR (100) NOT NULL,
    password VARCHAR (255) NOT NULL,
    city VARCHAR (100) NOT NULL,
    address VARCHAR (100) NOT NULL,
    RegDate DATETIME,
    dob VARCHAR (100) NOT NULL,
    UNIQUE KEY unique_email (email),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (user_id),
    FOREIGN KEY (role_id) REFERENCES roles (role_id)
);

-- example:
CREATE TABLE products (
    id INT AUTO_INCREMENT NOT NULL,
    PRIMARY KEY (id)
);