const connection = require("../db");
const express = require("express");

const getAllPost = () => {
  const command = `SELECT * FROM post`;
  connection.query(command, (err, result, extra) => {
    if (err) throw err;
    // result are the data returned by mysql server
    console.log('RESULT: ', result);
    // extra are extra meta data about result
    console.log('EXTRA: ', extra);
  });
};


const createPost = async (req, res) => {
    const query = `INSERT INTO post (price,
      postdate,category,title,description,location,fromdate,todate,name,PhoneNumber,img_url)
      VALUES (?,now(),?,?,?,?,?,?,?,?,?)`;
    let {price,category,title,description,location,fromdate,todate,name,PhoneNumber,img_url}= req.body;
    const data = [price,category,title,description,location,fromdate,todate,name,PhoneNumber,img_url];
    connection.query(query, data, (err, result) => {
      if (err) throw err
      // console.log("RESULT: ", result);
      res.json(data);
      
    });
  };
  
  module.exports={
    createPost,
    getAllPost
  }