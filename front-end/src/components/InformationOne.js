import React from 'react'

import InformationTow from './InformationTwo'

const Information_1 =(props)=>{
    const newpost=props.npost.map((ele)=>{
        return <InformationTow onepost={ele} />
    })
        return (
            <div>
               
                {newpost}
            </div>
                
        )
    
}
export default Information_1
