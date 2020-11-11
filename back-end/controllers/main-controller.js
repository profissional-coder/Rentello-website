const connection = require('../db');
const express = require('express');



const getAllUsers=(req,res)=>{
    const command = `SELECT * FROM users`;
    connection.query(command, (err, result) => {
      if (err) throw err;
      console.log('RESULT: ', result);
     res.json(result)
    }); 
}

module.exports={
    getAllUsers
}