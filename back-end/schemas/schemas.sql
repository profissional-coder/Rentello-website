USE itemrental;
​
CREATE TABLE roles (
    role_id INT AUTO_INCREMENT NOT NULL,
    type VARCHAR(50) NOT NULL,
    PRIMARY KEY (role_id)
);
​
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
​
CREATE TABLE post (
    post_id INT AUTO_INCREMENT NOT NULL,
    user_id INT(5),
    category_id INT (5),
    comment_id INT (5),
    price INT (100),
    postdate DATETIME,
    category VARCHAR (100),
    title VARCHAR (100),
    description VARCHAR (100),
    location VARCHAR (100),
    fromdate VARCHAR (100),
    todate VARCHAR (100),
    name VARCHAR (100),
    PhoneNumber INT (100),
    img_url VARCHAR (255),
    PRIMARY KEY (post_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    FOREIGN KEY (category_id) REFERENCES category (category_id)
);
​
CREATE TABLE category (
    category_id INT AUTO_INCREMENT NOT NULL,
    nameCategory VARCHAR (100),
     PRIMARY KEY (category_id)
);
-- after login to user and use right schema use this 
ALTER TABLE users
ADD img_url VARCHAR(255);
--add this table 
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT NOT NULL,
    user_id INT(5),
    price INT (100),
    postdate DATETIME,
    category VARCHAR (100),
    title VARCHAR (100),
    description VARCHAR (100),
    location VARCHAR (100),
    fromdate VARCHAR (100),
    todate VARCHAR (100),
    name VARCHAR (100),
    PhoneNumber INT (100),
    img_url VARCHAR (255),
    PRIMARY KEY (order_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);