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
  updatePost
};
