const express = require('express');
const mainRouter = express.Router();
const {connection,showPosts} = require("../schemas/postSchema")

mainRouter.get('/', (req, res) => {
  res.json('HELLO WORLD');
});
// mainRouter.get('/posts/image', (req, res) => {
//   connection.query(`select * from image`,(err,result)=>{
//     if (err) throw err
//     console.log(result);
//     res.json(result)
//         })});

mainRouter.post('/posts/create',async (req, res) => {
  connection.query(`insert into posts (user_id,comment_id,category_id,price,
  post_date,category,location,from_date,to_date,image_url)
  values (${req.body.user_id},${req.body.comment_id},${req.body.category_id},${req.body.price},
      '${req.body.post_date}',"${req.body.category}","${req.body.location}",
      "${req.body.from_date}",'${req.body.to_date}','${req.body.image_url}')`
  ,(err,result)=>{
  console.log(result);
  res.json(result)

      if (err) {
          console.log(err);
        res.json(err)}
  })
});
mainRouter.get('/posts', (req, res) => {
  connection.query(`select * from posts`,(err,result)=>{
    if (err) throw err
    // console.log(result);
    res.json(result)
        })
});
mainRouter.get('/post', (req, res) => {
  connection.query(`select * from posts WHERE post_id='${req.body.user_id}'`,(err,result)=>{
    if (err) throw err
    console.log(result);
    res.json(result)
        })
});
mainRouter.delete('/posts/delete-all', (req, res) => {
  connection.query(`delete from posts WHARE `,(err,result)=>{
    if (err) throw err
    console.log(result);
    res.json(result)

        })
});
mainRouter.delete('/posts/:post_id', (req, res) => {
  console.log("params",req.params);

  connection.query(`DELETE FROM posts WHERE post_id='${req.params.post_id}'`,(err,result)=>{
    if (err) throw err
    console.log("params",req.params);
    console.log(result);
    res.json(result)
        })
});
mainRouter.put('/posts/update', (req, res) => {
  
  connection.query(`UPDATE posts 
  SET 
  category_id=${req.body.category_id},
  price=${req.body.price},
  post_date='${req.body.post_date}',
  category="${req.body.category}",location="${req.body.location}",
  from_date= "${req.body.from_date}",to_date='${req.body.to_date}',
  image_url="${req.body.image_url}"
  WHERE  
  post_id='${req.body.post_id}' `
  ,(err,result)=>{
  console.log(result);
  res.json(result) 
      if (err) {
          console.log(err);}  
  })
  }  
)
module.exports = mainRouter;