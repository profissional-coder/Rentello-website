import React from 'react'

import InformationTow from './InformationTwo'

const Information_1 =(props)=>{
    
    const newpost=props.npost.map((ele,i)=>{
        return <InformationTow onepost={ele} Key={i} />
    })
        return (
            <div>
               <div></div>
                {newpost}
            </div>
                
        )
    
}
export default Information_1
