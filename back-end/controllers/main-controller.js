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
const register = async (req, res) => {
  const query = `INSERT INTO users (role_id,Fullname, email,password,city,address,RegDate,dob) VALUES (?, ?, ?,?, ?,?,now(),?)`;
  let { role_id, Fullname, email, password, city, address, dob } = req.body;
  password = await bcrypt.hashSync(password, Number(process.env.SALT));
  const data = [role_id, Fullname, email, password, city, address, dob];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.json(email + ` is already register.`);
    }
    // console.log("RESULT: ", result);
    res.json(`Thanks for registration. ${Fullname} Try to login Now`);
  });
};

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
        const { type, email, Fullname, city, address, dob } = result[0];
        const payload = {
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
        res.status(422);
        res.json({
          message: "Invalid login check your password",
        });
      }
    } else {
      res.status(404);
      res.json({
        message: "Invalid login check your email",
      });
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


module.exports = {
  getAllUsers,
  register,
  login,
  deleteAccount,
};
