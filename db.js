const mysql = require("mysql2");
require("dotenv").config();
const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});
// connection.connect((err) => {
//   if (err) {
//     console.error("CONNECTION ERROR: ", err.stack);
//     return;
//   }
//   console.log("CONNECTION ID: ", connection.threadId);
// });

// module.exports = connection;

/*
CREATE TABLE roles (
  role_id INT AUTO_INCREMENT NOT NULL,
  type VARCHAR(50) NOT NULL,
  PRIMARY KEY (role_id)
);
*/

/*
CREATE TABLE users (
    user_id INT AUTO_INCREMENT NOT NULL,
    role_id INT(100),
    Fullname VARCHAR (100) NOT NULL,
    email VARCHAR (100) NOT NULL,
    password VARCHAR (255) NOT NULL,
    city VARCHAR (100) NOT NULL,
    address VARCHAR (100) NOT NULL,
    RegDate DATETIME,
    dob DATETIME ,
    UNIQUE KEY unique_email (email),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (user_id),
    FOREIGN KEY (role_id) REFERENCES roles (role_id)
);
*/

/*
CREATE TABLE post (
    post_id INT AUTO_INCREMENT NOT NULL,
    user_id INT(5),
    category_id INT (5),
    comment_id INT (5),
    name VARCHAR (100),
    price INT (100),
    post_date DATETIME,
    category VARCHAR (100),
    location VARCHAR (100),
    from_date DATETIME,
    to_date DATETIME,
    img_url VARCHAR (255),
    description VARCHAR (255),
    phoneNumber INT (15),
    PRIMARY KEY (post_id),
    FOREIGN KEY (category_id) REFERENCES category (category_id)
);
*/

/*
CREATE TABLE category (
  category_id INT AUTO_INCREMENT NOT NULL,
  nameCategory VARCHAR (100),
  PRIMARY KEY (category_id)
);
*/
