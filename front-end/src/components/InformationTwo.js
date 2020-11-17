import React, { Component } from 'react'
const InformationTwo=(props)=>{
    
    const {onepost}=props;
    const {post_id,PhoneNumber,category,category_id,comment_id,description,fromdate,img_url,location,name,postdate,price,title,todate,user_id}=onepost;
    
    return (
        <div className='AllPost'>
        <div className='Title'>
        <p>{title}</p>
           <p>{location}</p>
       </div>
       <div className='img'>
          <img src={img_url}></img>
          <p>10000</p>
       </div>
    </div>
    )
}
        
 

export default InformationTwo
