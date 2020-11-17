import React, { Component, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Link,
} from "react-router-dom";




const Renderall = () => {
  const [info, setInfo] = useState([]);
  const [infoPosts, setInfoPosts] = useState([]);
  const [postPic, setPostPic] = useState("");
  const [address, setAddress] = useState("");
  const [Fullname, setFullname] = useState("");
  const [dob, doBset] = useState("");
  const [email, setEmail] = useState("");

  const getPosts = async (infoArgumnt) => {
    console.log(infoArgumnt);
    axios
      .get(`http://localhost:5000/posts`)
      .then(async (response) => {
        console.log("response", response);

        setInfoPosts(response.data);
        
        //  setTitle(response.data)
        //  setPhoneNumber(response.data)
        //  setPostdate(response.data)
        //  setStartDate(response.data)
        //  setEndDate(response.data)
        //  setCategory(response.data)
        //  setDescription(response.data)
        if (infoPosts.length === []) {
          alert("no posts found");
        }
      })
      .catch((err) => {
        console.log("RESULT: ", err);
      });
  };

  const newArr = infoPosts.map((elem, index) => (
    <li num={index + 1} key={index}>
      {/* <Link className="link" to="/rent" state={ {infoPosts}} > */}
        
      <Link className="link" to={{
  pathname: '/rent',
  state: elem.post_id
}}>
      
        <div className="postTitle">
          Post {index + 1} || {elem.name} || posted at : {elem.postdate}
        </div>
        <div>Category : {elem.location}</div>
        <div>
          {" "}
          <img className="img" src={elem.img_url} alt="post image"></img>
        </div>
        <div>Location : {elem.location}</div>
        <div>PhoneNumber :{elem.PhoneNumber}</div>
        <div>Price :{elem.price}</div>
        <div>StartDate : {elem.fromdate}</div>
        <div>EndDate : {elem.todate}</div>
        <div>Description : ||{elem.description}||</div>
        </Link> 
    </li>
  ));
  return (
   
    <div>
    
     
      <div className="pPosts">
        <button onClick={() => getPosts()}>get posts info</button>

        <ul className="pPostsList">
          {newArr}</ul>
      </div>
    </div>
 
  );
 
};
export default Renderall;
