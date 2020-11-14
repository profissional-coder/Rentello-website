const connection = require("../db");
const express = require("express");

const getAllpost = (req, res) => {
  const command = `SELECT * FROM post `;
  connection.query(command, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
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
     
      res.json(data);

    });
  };
  const getAllUsers = (req, res) => {
    const command = `SELECT * FROM users WHERE is_deleted=0`;
    connection.query(command, (err, result) => {
      if (err) throw err;
      console.log("RESULT: ", result);
      res.json(result);
    });
  };
  /*
  const createUser = async (req, res) => {
    const query = `INSERT INTO users (role_id,Fullname, email,password,city,address,RegDate,dob) VALUES (?, ?, ?,?, ?,?,now(),?)`;
    let {  fullName, email, password, city, address, dob } = req.body;
    const data = [1, fullName, email, password, city, address, dob];
    connection.query(query, data, (err, result) => {
      if (err) throw err
      res.json(result);
    });
  };
  */
  const PostAndUsers = (req, res) => {
    const query=`SELECT post.post_id,users.user_id 
                 from users INNER JOIN post ON post.user_id=users.user_id `;
                 let {price,category,title,description,location,fromdate,todate,name,PhoneNumber,img_url}= req.body;
                 const data = [price,category,title,description,location,fromdate,todate,name,PhoneNumber,img_url];
            connection.query(query,data,(err,result)=>{
              if(err) throw err
              res.json(data);
            })
  }
  
  module.exports={
    createPost,
    getAllpost,
    getAllUsers,
  
    PostAndUsers
    
  }