import React, { Component, useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';

    const Profile = () => { 
      const [info, setInfo] = useState([]);
      const [infoPosts, setInfoPosts] = useState([]);
      const [userPic, setUserPic] = useState("");
      const [postPic, setPostPic] = useState("");
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
      // const [postdate, setPostdate] = useState("");
      // const [PhoneNumber, setPhoneNumber] = useState("");
      // const [category, setCategory] = useState("");
      const getUser =async (infoArgumnt) => {
            console.log(infoArgumnt)
            axios
              .get(`http://localhost:5000/user/${infoArgumnt}`)
              .then(async (response) => {
                console.log("response",response)
                // alert(response)
                setLoading(true)
                 setInfo(response.data)
                if(info.length===[]){
                  setLoading(false)
                  alert("no user found")
                }
                setAddress(response.data[0].address)
                setFullname(response.data[0].Fullname)
                doBset(response.data[0].dob)
                setEmail(response.data[0].email)
                setUserPic(response.data[0].img_url)
                
                setLoading(false)

              })
              .catch((err) => {
                console.log('RESULT: ', err);
              });
          };
          const getPosts =async (infoArgumnt) => {
            console.log(infoArgumnt)
            axios
              .get(`http://localhost:5000/posts`)
              .then(async (response) => {
                console.log("response",response)
                // alert(response)
                setLoading(true)
                 setInfoPosts(response.data)
                //  setLocation(response.data)
                //  setTitle(response.data)
                //  setPhoneNumber(response.data)
                //  setPostdate(response.data)
                //  setStartDate(response.data)
                //  setEndDate(response.data)
                //  setCategory(response.data)
                //  setDescription(response.data)
                if(infoPosts.length===[]){
                  setLoading(false)
                  alert("no posts found")
                }
                
                setLoading(false)

              })
              .catch((err) => {
                console.log('RESULT: ', err);
              });
          };
        const userId = (e)=>{
          setId(e.target.value)
        }
        const newArr = infoPosts.map((elem,index)=><li  num={index+1} key={index}>
          <div className="postTitle" >Post {index+1} || {elem.name} || posted at : {elem.postdate}</div>
          <div>Title : {elem.Title}</div>
          <div>Category : {elem.category}</div>
          <div> {elem.img_url}</div>
          <div>Location : {elem.location}</div>
          <div>PhoneNumber :{elem.PhoneNumber}</div>
          <div>Price :{elem.price}</div>
          <div>StartDate : {elem.fromdate}</div>
          <div>EndDate : {elem.todate}</div>
          <div>Description : ||{elem.description}||</div>
          </li> )
    
      return (
     <div className="profile">
       <img src={userPic} alt="profile pic"  className="pPic"></img>
<nav className="pNav" >{Fullname} Profile</nav >
<div className='pPosts'>
  {Fullname} posts    <button onClick={()=>getPosts()} >get posts info</button> 

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