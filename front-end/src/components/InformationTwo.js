import React, { Component } from 'react'
const InformationTwo=(props)=>{
    
    const {onepost}=props;
    const {post_id,PhoneNumber,category,category_id,comment_id,description,fromdate,img_url,location,name,postdate,price,title,todate,user_id}=onepost;
    
    return (
        <div>
            
        <div className='Post'>
            <div>
                <h1>hhhhh</h1>
            <p>{title}</p>
            </div>
        </div>
        </div>
    )
}
        
 

export default InformationTwo
