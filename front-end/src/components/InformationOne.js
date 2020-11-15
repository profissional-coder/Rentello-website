import React from 'react'

import InformationTow from './InformationTwo'

const Information_1 =(props)=>{
    const newpost=props.npost.map((ele)=>{
        return <InformationTow onepost={ele} />
    })
        return (
            <div>
                <span>Post id </span>
                <span>PhoneNumber</span>
                <span>Category</span>
                <span>Category_id</span>
                <span>Comment_id</span>
                <span>description</span>
                <span>fromdate</span>
                <span>img_url</span>
                <span>location</span>
                <span>name</span>
                <span>postdate</span>
                <span>price</span>
                <span>title</span>
                <span>todate</span>
                <span>user_id</span>
                {newpost}
            </div>
                
        )
    
}
export default Information_1
