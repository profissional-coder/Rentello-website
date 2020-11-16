const connection = require("../db");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const getAllpost = (req, res) => {
  const command = `SELECT * FROM post `;
  connection.query(command, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};

const createPost = async (req, res) => {
  const query = `INSERT INTO post (price,name,
    postdate,category,location,fromdate,todate,img_url)
    VALUES (?,?,now(),?,?,?,?,?)`;
  let {price,name,category,location,fromdate,todate,img_url}= req.body;
  const data = [price,name,category,location,fromdate,todate,img_url];
  connection.query(query, data, (err, result) => {
    if (err) throw err
    // console.log("RESULT: ", result);
    res.json(`successfully create post`);
  });
}; 
//******************order part */
const createOrder = async (req, res) => {
  const query = `INSERT INTO orders (price,name,PhoneNumber,title,
    postdate,category,location,fromdate,todate,description,img_url)
    VALUES (?,?,?,?,now(),?,?,?,?,?,?)`;
  let {price,name,PhoneNumber,title,category,location,fromdate,todate,description,img_url}= req.body;
  const data = [price,name,PhoneNumber,title,category,location,fromdate,todate,description,img_url];
  connection.query(query, data, (err, result) => {
    if (err) throw err
    // console.log("RESULT: ", result);
    res.json(`successfully create order`);
  });
}; 
const getOrders = (req, res) => {
  const command = `SELECT * FROM orders `;
  connection.query(command,(err, result) => {
    if (err) throw err;
    // console.log('RESULT: ', result);
    res.status(200);
    res.json({
      message: result,
    });
  });
};
const deleteOrder = (req, res) => {
  const command = `DELETE FROM orders WHERE order_id=?`;
  const arrData = [req.params.order_id];
  connection.query(command, arrData, (err, result) => {
    if (err) throw err;
    // console.log('RESULT: ', result);
    res.status(200);
    res.json({
      message: result,
    });
  });
};
//********************************* order part end */
const deleteALL = (req, res) => {
  const command = `delete from post WHARE`;
  connection.query(command, (err, result) => {
    if (err) throw err;
    // console.log('RESULT: ', result);
    res.status(200);
    res.json({
      message: "successfully deleted ",
    });
  });
};
const getpost = (req, res) => {
  const command = `SELECT * FROM post WHERE name = ?`;
  const arrData = [req.params.name];
  connection.query(command, arrData, (err, result) => {
    if (err) throw err;
    // console.log('RESULT: ', result);
    res.status(200);
    res.json({
      message: result,
    });
  });
};
const deletePost = (req, res) => {
  const command = `DELETE FROM post WHERE post_id=?`;
  const arrData = [req.params.post_id];
  connection.query(command, arrData, (err, result) => {
    if (err) throw err;
    // console.log('RESULT: ', result);
    res.status(200);
    res.json({
      message: result,
    });
  });
};
const updatePost=(req,res)=>{
  const command = `UPDATE post 
  SET name=? ,price=?,
  post_date=?,
  category=?,location=?,
  from_date= ?,to_date=?,
  img_url=?
  WHERE  
  post_id=?`;
  const{name,price,post_date,category,location,from_date,to_date,img_url,post_id}=req.body
  const arrData = [name,price,post_date,category,location,from_date,to_date,img_url,post_id];
  connection.query(command, arrData, (err, result) => {
    if (err) throw err;
    // console.log('RESULT: ', result);
    res.status(200);
    res.json({
      message: result,
    });
  });
}
module.exports = {
  getAllpost,
  createPost,
  deleteALL,
  getpost,
  deletePost,
  updatePost,
  createOrder,
  getOrders,
  deleteOrder
};