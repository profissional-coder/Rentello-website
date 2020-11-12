const mysql =require("mysql2")
const { createConnection } = require("mysql2/promise")
require("dotenv").config()
const express = require('express'); 
const app = express();
const connection= mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME
})
connection.connect((err) => {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
const addPost=(post)=>{
connection.query(`insert into posts (user_id,comment_id,category_id,price,post_date,category,location,from_date,to_date)
values (${post.user_id},${post.comment_id},${post.category_id},${post.price},
    '${post.post_date}',"${post.category}","${post.location}",
    "${post.from_date}",'${post.to_date}')`
,(err,res)=>{
console.log(res);
    if (err) {
        console.log(err);}
    
})
}  
const test1={
    user_id:0
    ,comment_id:0
    ,category_id:0,
    price:12,
    category:"pants",
    post_date:'2018-10-20',
    location:"zarqa",
    from_date:'2018-10-20',
    to_date:'2018-10-20',
    image_url:""
}
// addPost(test1)  
const showPosts=(req,res)=>{
    connection.query(`select * from posts`,(err,result)=>{
if (err) throw err
console.log(result);
// res.json(result)
    })
}

// showPosts()

const createTable=()=>{
    connection.query(`create table image (
        image_id int AUTO_INCREMENT NOT NULL,
        image blob,
        PRIMARY KEY (image_id)
    )`,(err,result)=>{
if (err) throw err
console.log(result);
    })
} 

// createTable()
const addImage=(pic)=>{
    connection.query(`INSERT INTO image (image) values("${pic}")
    `,(err,result)=>{
if (err) throw err
console.log(result); 
    })
}  
// addImage("D:/JCA/project/Rentello-website/back-end/schemas/Thinking-of-getting-a-cat.jpg")
// addImage(" https://www.google.com/url?sa=i&url=https%3A%2F%2Ficatcare.org%2Fadvice%2Fthinking-of-getting-a-cat%2F&psig=AOvVaw2XBwg06EBnZc7M9kNwFsq8&ust=1605262528556000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDgkcaV_ewCFQAAAAAdAAAAABAD")
const deleteAllPosts=()=>{
    connection.query(`delete from posts WHARE `,(err,res)=>{
if (err) throw err
console.log(res);
    })
}
// deleteAllPosts()
const deletePost=(id)=>{
    connection.query(`DELETE FROM posts WHERE post_id='${id}'`,(err,res)=>{
if (err) throw err
console.log(res);
    })

} 
// deletePost(14)

const updatePost=(post)=>{
    connection.query(`UPDATE posts 
    SET 
    category_id=${post.category_id},
    price=${post.price},
    post_date='${post.post_date}',
    category="${post.category}",location="${post.location}",
    from_date= "${post.from_date}",to_date='${post.to_date}' 
    WHERE  
    post_id='${post.post_id}' `
    ,(err,res)=>{
    console.log(res);
    
        if (err) {
            console.log(err);}
        
    })
    }  
    const test2={
        post_id:15,
        user_id:0
        ,comment_id:0
        ,category_id:0,
        price:12,
        category:"pants2",
        post_date:'2017-10-20',
        location:"Amman",
        from_date:'2017-10-20',
        to_date:'2017-10-20'
    }
    // updatePost(test2)
module.exports={connection,showPosts}