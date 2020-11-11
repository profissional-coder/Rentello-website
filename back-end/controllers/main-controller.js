const connection = require("../db");
const express = require("express");
const bcrypt = require("bcrypt");
require("dotenv").config();
const getAllUsers = (req, res) => {
  const command = `SELECT * FROM users`;
  connection.query(command, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};
const register = async (req, res) => {
  const query = `INSERT INTO users (Fullname, email,password,city,address,RegDate,dob) VALUES (?, ?, ?, ?,?,now(),?)`;
  let { Fullname, email, password, city, address, dob } = req.body;
  password = await bcrypt.hashSync(password, Number(process.env.SALT));
  const data = [Fullname, email, password, city, address, dob];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.json(email + ` is already register.`);
    }
    // console.log("RESULT: ", result);
    res.json(`Thanks for registration.Try to login Now`);
  });
};

const login = (req, res) => {
  const query = `SELECT email ,password FROM users WHERE email=?`;
  const { email, password } = req.body;
  const data = [email, password];
  let r = [];
  connection.query(query, data, async (err, result) => {
    if (err) throw err;
    console.log("result :", result[0].password);
    if (result.length) {
      if (await bcrypt.compare(password, result[0].password)) {
        res.json("correct");
      }else{
        res.json("not correct"); 
      }
    }
  });
};

module.exports = {
  getAllUsers,
  register,
  login,
};
