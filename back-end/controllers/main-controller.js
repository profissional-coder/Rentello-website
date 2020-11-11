const connection = require("../db");
const express = require("express");
const bcrypt=require ("bcrypt")
require('dotenv').config();
const getAllUsers = (req, res) => {
  const command = `SELECT * FROM users`;
  connection.query(command, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};
const addUser = async(req, res) => {
  const query = `INSERT INTO users (Fullname, email,password,city,address,RegDate,dob) VALUES (?, ?, ?, ?,?,now(),?)`;
let { Fullname, email, password, city, address, dob } = req.body;
  password= await bcrypt.hashSync(password,Number(process.env.SALT));
  const data = [Fullname, email, password, city, address, dob];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.json(email + ` is already register.`);
    }
    // console.log("RESULT: ", result);
    res.json(`Thanks for registration.Try to login Now`);
  });
};




module.exports = {
  getAllUsers,
  addUser,
};
