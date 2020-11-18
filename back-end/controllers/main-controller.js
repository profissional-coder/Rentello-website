const connection = require("../db");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const getAllUsers = (req, res) => {
  const command = `SELECT * FROM users WHERE is_deleted=0`;
  connection.query(command, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};

const PostAndUsers = (req, res) => {
  const query = `SELECT post.post_id,users.user_id 
                 from users INNER JOIN post ON post.user_id=users.user_id `;
  let {
    price,
    category,
    title,
    description,
    location,
    fromdate,
    todate,
    name,
    PhoneNumber,
    img_url,
  } = req.body;
  const data = [
    price,
    category,
    title,
    description,
    location,
    fromdate,
    todate,
    name,
    PhoneNumber,
    img_url,
  ];
  connection.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(data);
  });
};

const register = async (req, res) => {
  const query = `INSERT INTO users (role_id,Fullname, email,password,city,address,RegDate,dob) VALUES (2, ?, ?,?, ?,?,now(),?)`;
  let { Fullname, email, password, city, address, dob } = req.body;
  password = await bcrypt.hashSync(password, Number(process.env.SALT));
  const data = [Fullname, email, password, city, address, dob];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.json(email + ` is already register.`);
    }

    res.json(data);
  });
};
//add user_id in payload
const login = (req, res) => {
  const query = `SELECT * ,roles.type FROM roles INNER JOIN users ON 
  users.role_id=roles.role_id WHERE email=?`;
  const { email, password } = req.body;
  const data = [email, password];
  connection.query(query, data, async (err, result) => {
    if (err) throw err;
    // console.log("result :", result[0]);
    if (result.length) {
      if (await bcrypt.compare(password, result[0].password)) {
        const { user_id,type, email, Fullname, city, address, dob } = result[0];
        const payload = {
          user_id,
          type,
          email: email,
          Fullname: Fullname,
          city: city,
          address: address,
          dob: dob,
        };

        const options = {
          expiresIn: process.env.TOKEN_EXPIRATION,
        };

        const token = jwt.sign(payload, process.env.SECRET, options);
        res.json(token);
      } else {
        // res.status(422);
        res.json("Invalid login check your password");
      }
    } else {
      // res.status(404);
      res.json("Invalid login check your email");
    }
  });
};
const deleteAccount = (req, res) => {
  const command = `UPDATE users SET is_deleted = 1 WHERE user_id = ?`;

  // console.log('req.params',req.params.user_id);

  const arrData = [req.params.user_id];
  connection.query(command, arrData, (err, result) => {
    if (err) throw err;
    // console.log('RESULT: ', result);
    res.status(200);
    res.json({
      message: "successfully deleted account",
    });
  });
};

const createPost = async (req, res) => {
  const query = `INSERT INTO post (price,name,
    post_date,category,location,from_date,to_date,img_url)
    VALUES (?,?,now(),?,?,?,?,?) `;

  let {
    price,
    name,
    category,
    location,
    from_date,
    to_date,
    img_url,
  } = req.body;
  const data = [price, name, category, location, from_date, to_date, img_url];
  connection.query(await query, data, (err, result) => {
    if (err) throw err;
    // console.log('data',data);
  });
};

const getLastPost = (req, res) => {
  // const query2=` SELECT MAX(post_id) FROM  post;`
  const query2 = `SELECT post_id FROM post ORDER BY post_id DESC LIMIT 1`;
  connection.query(query2, (err, result) => {
    if (err) throw err;
    // console.log('result : ',result[0].post_id);
    const query2 = ` SELECT * FROM post WHERE post_id=${result[0].post_id};`;
    connection.query(query2, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });
};
const updateUser = async (req, res) => {
  let { email, Fullname, password, city, address, dob, img_url } = req.body;
  let newPassword = await bcrypt.hashSync(password, Number(process.env.SALT));
  const query = `UPDATE users SET Fullname="${Fullname}", password='${newPassword}',city="${city}",
    address="${address}",dob=${dob},img_url="${img_url}" 
  WHERE email="${email}"`;
  // const data = [ Fullname, email, password, city, address, dob,img_url];
  // console.log(data);
  connection.query(query, (err, result) => {
    if (err) {
      // res.json(email + ` is already register.`);
      res.json(err);
    }
    console.log("RESULT: ", result);
    // res.json(`Thanks for registration. ${Fullname} Try to login Now`);
    res.json(result);
  });
};
const getAllpost = (req, res) => {
  const command = `SELECT * FROM post `;
  connection.query(command, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};

const getpost = (req, res) => {
  //  console.log('req.params',req.params.post_id);
  const command = `SELECT * FROM post WHERE post_id = ${req.params.post_id}`;
  connection.query(command, (err, result) => {
    if (err) throw err;
    // console.log('RESULT: ', result);
    // res.status(200);
    res.json(result);
  });
};
//rama and malak create same function 
const createOrder = async (req, res) => {
  const query = `INSERT INTO orders (user_id,post_id,
    fromdate,todate) VALUES (?,?,?,?)`;
  let {user_id,post_id,
    fromdate,todate}= req.body;
  const data = [user_id,post_id,
    fromdate,todate];
  connection.query(query, data, (err, result) => {
    if (err) throw err
  
res.json(result)
  });
}; 

//rama and malek create same function 
const getOrders = (req, res) => {
  const command = `select users.Fullname,users.city,users.address,post.name,
  post.price,post.location,post.category,post.img_url,
  orders.fromdate,orders.todate from orders 
  inner join users on orders.user_id = users.user_id 
  inner join post on orders.post_id = post.post_id 
  WHERE orders.user_id=${req.params.user_id}`;
  connection.query(command,(err, result) => {
    if (err) throw err;
    res.json(result)
  });
};



module.exports = {
  getAllUsers,
  register,
  login,
  deleteAccount,
  createPost,
  PostAndUsers,
  updateUser,
  getLastPost,
  getAllpost,
  getpost,
  createOrder,
  getOrders,
 
};
