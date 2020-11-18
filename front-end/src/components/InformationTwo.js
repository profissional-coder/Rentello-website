import React, { Component } from 'react'
const InformationTwo=(props)=>{
    
    const {onepost,Key}=props;
    const {post_id,phoneNumber,category,description,fromdate,img_url,location,name,postdate,price,title,todate,user_id}=onepost;
    
    return (
        <div className='AllPost'>
        <div className='Title' >
           <p>{Key}</p>
           <p>{title}</p>
           <p>{location}</p>
           <p>{fromdate}</p>
           <button>{phoneNumber}</button>
       </div>
       <div className='img'>
          <img src={img_url}></img>
          <p>{price}</p>
       </div>
    </div>
    )
}
        
 

export default InformationTwo
