import React, { Component, useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';

    const Profile = () => {
      const [info, setInfo] = useState([]);
      const [address, setAddress] = useState("");
      const [Fullname, setFullname] = useState("");
      const [dob, doBset] = useState("");
      const [email, setEmail] = useState("");
      const [loading, setLoading] = useState(false);
      const [id, setId] = useState("");
      const [arr,setArr] =useState([
        {Name:"user2",Title:"post1",Description:" Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
      ,Location:"jordan",StartDate:"2/2/2009",EndDate:"2/2/2009",PhoneNumber:"0793872819"},
      {Name:"user2",Title:"post1",Description:" Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
      ,Location:"jordan",StartDate:"2/2/2009",EndDate:"2/2/20091",PhoneNumber:"0793872819"}])
      // const [Name, setName] = useState("");
      // const [Title, setTitle] = useState("");
      // const [Description, setDescription] = useState("");
      // const [Location, setLocation] = useState("");
      // const [StartDate, setStartDate] = useState("");
      // const [EndDate, setEndDate] = useState("");
      // const [PhoneNumber, setPhoneNumber] = useState("");
 
      
      
      const getUser =async (infoArgumnt) => {
            console.log(infoArgumnt)
            axios
              .get(`http://localhost:5000/user/${infoArgumnt}`)
              .then(async (response) => {
                console.log("response",response)
                // alert(response)
                setLoading(true)
                 setInfo(response.data)
                if(info.length===0){
                  setLoading(false)
                  alert("no user found")
                }
                setAddress(response.data[0].address)
                setFullname(response.data[0].Fullname)
                doBset(response.data[0].dob)
                setEmail(response.data[0].email)
                
                setLoading(false)

              })
              .catch((err) => {
                console.log('RESULT: ', err);
              });
          };
        const userId = (e)=>{
          setId(e.target.value)
        }
      
        const newArr = arr.map((elem,index)=><li  num={index+1} key={index}>
          <div>Post {index} {elem.Name} </div>
          <div>Title : {elem.Title}</div>
          <div>Location : {elem.Location}</div>
          <div>PhoneNumber :{elem.PhoneNumber}</div>
          <div>StartDate : {elem.StartDate}</div>
          <div>EndDate : {elem.EndDate}</div>
          <div>Description : ||{elem.Description}||</div>
          </li> )
    
      return (
     <div className="profile">
<nav className="pNav" > Profile</nav >
<div className='pPosts'>
  my posts
<ul className='pPostsList'>
{newArr}
</ul>
<button onClick >POST</button>
</div>
<div className="pInfo">

<p>userInfo</p>
<input onChange={userId}/>

    <button onClick={()=>getUser(id)} >get user info</button> 
{loading?(<div class="loader"></div>):(<div className="userInfo" >
    <p>user name : {Fullname}</p>
    <p>birthday :{dob} </p>
    <p>address :{address} </p>
    <p> email :{email}</p>
    </div> )}
    </div>
  </div>
    )
}

export default Profile