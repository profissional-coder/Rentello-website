import React from 'react'
import {
    Link,
  } from "react-router-dom";
const Userprofile=()=>{

        return (
            <div>
                <p>malik </p>
                <Link className="link" to="/update">
                <button>Update</button>
                </Link>
            </div>
        )
    
}

export default Userprofile

