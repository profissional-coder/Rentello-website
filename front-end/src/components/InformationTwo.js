import React, { Component } from 'react'
const Information_2=(props)=>{
    
    const {onepost}=props;
    const {post_id,PhoneNumber,category,category_id,comment_id,description,fromdate,img_url,location,name,postdate,price,title,todate,user_id}=onepost;
    
    return (
        <div>
            
        <div className='Post'>
             <div className='id'><span>{post_id}</span></div>
             <div className='phone'><span>{PhoneNumber}</span></div>   
             <div className='category'><span>{category}</span></div>   
             <div className='category_id'><span>{category_id}</span></div>   
             <div className='comment_id'><span>{comment_id}</span></div>   
             <div className='description'><span>{description}</span></div>   
             <div className='fromdate'><span>{fromdate}</span></div>
             <div className='location'><span>{location}</span></div>    
             <div className='name'><span>{name}</span></div>    
             <div className='postdate'><span>{postdate}</span></div>    
             <div className='price'><span>{price}</span></div>    
             <div className='title'><span>{title}</span></div>    
             <div className='todate'><span>{todate}</span></div>    
             <div className='userID'><span>{user_id}</span></div>    
             <div className='img_url'><span>{img_url}</span></div>      
        </div>
        </div>
    )
}
        
 

export default Information_2
