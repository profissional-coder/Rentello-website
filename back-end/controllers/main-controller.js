const connection = require("../db");
const express = require("express");

const getAllUsers = (req, res) => {
  const command = `SELECT * FROM users`;
  connection.query(command, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};
const addUser = (req, res) => {
  const query = `INSERT INTO users (Fullname, email,password,city,address,RegDate,dob) VALUES (?, ?, ?, ?,?,now(),?)`;
  const { Fullname, email, password, city, address, dob } = req.body;
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
