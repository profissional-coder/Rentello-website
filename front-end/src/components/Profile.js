import React, { Component, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import Userprofile from "./Userprofile";
import { Link } from "react-router-dom";
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
  const [updating, setUpdating] = useState(false);
  const [Name, setName] = useState("");
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Location, setLocation] = useState("");
  const [StartDate, setStartDate] = useState("");
  const [EndDate, setEndDate] = useState("");
  const [postdate, setPostdate] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Category, setCategory] = useState("");
  const [Price, setPrice] = useState("");
  const [postImage, setPostImage] = useState("");

  const getUser = async (infoArgumnt) => {
    console.log(infoArgumnt);
    axios
      .get(`http://localhost:5000/user/${infoArgumnt}`)
      .then(async (response) => {
        console.log("response", response);
        // alert(response)
        setLoading(true);
        setInfo(response.data);
        if (info.length === []) {
          setLoading(false);
          alert("no user found");
        }
        setAddress(response.data[0].address);
        setFullname(response.data[0].Fullname);
        doBset(response.data[0].dob);
        setEmail(response.data[0].email);
        setUserPic(response.data[0].img_url);

        setLoading(false);
      })
      .catch((err) => {
        console.log("RESULT: ", err);
      });
  };
  const getPosts = async (infoArgumnt) => {
    console.log(infoArgumnt);
    axios
      .get(`http://localhost:5000/posts/${id}`)
      .then(async (response) => {
        console.log("response", response);
        setLoading(true);
        setInfoPosts(response.data);
        if (infoPosts.length === []) {
          setLoading(false);
          alert("no posts found");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("RESULT: ", err);
      });
  };
  const deletePosts = async (infoArgumnt) => {
    console.log(infoArgumnt);
    axios
      .delete(`http://localhost:5000/delete/${infoArgumnt}`)
      .then(async (response) => {
        console.log("response", response);
        alert("one post deleted");
        getPosts();
      })
      .catch((err) => {
        console.log("RESULT: ", err);
      });
  };
  const UTitle = (e) => {
    setTitle(e.target.value);
  };
  const uNum = (e) => {
    setPhoneNumber(e.target.value);
  };
  const uStart = (e) => {
    setStartDate(e.target.value);
  };
  const uEnd = (e) => {
    setEndDate(e.target.value);
  };
  const uLocation = (e) => {
    setLocation(e.target.value);
  };
  const uCategory = (e) => {
    setCategory(e.target.value);
  };
  const u_img_url = (e) => {
    setPostImage(e.target.value);
  };
  const uName = (e) => {
    setName(e.target.value);
  };
  const uPrice = (e) => {
    setPrice(e.target.value);
  };
  const updatePosts = async (infoArgumnt) => {
    console.log(infoArgumnt);
    const arrData = [
      {
        name: Name,
        price: Price,
        category: Category,
        location: Location,
        from_date: StartDate,
        to_date: EndDate,
        img_url: postImage,
        post_id: infoArgumnt,
      },
    ];
    console.log("arrData:", arrData[0]);
    axios
      .put(`http://localhost:5000/posts/update`, arrData[0])
      .then(async (response) => {
        console.log("response", response);
        alert("one post update");
        console.log(response);
        getPosts();
      })
      .catch((err) => {
        console.log("RESULT: ", err);
      });
  };
  const userId = (e) => {
    setId(e.target.value);
  };
  const newArr = infoPosts.map((elem, index) => (
    <li num={index + 1} key={index}>
      <div className="postTitle">
        Post {index + 1} || {elem.name} || posted at : {elem.postdate}
      </div>
      <div>
        Title : {elem.title}{" "}
        <button onClick={() => deletePosts(elem.post_id)}>D</button>
        <button
          onClick={() => {
            updatePosts(elem.post_id);
          }}
        >
          U
        </button>{" "}
      </div>
      <div>Category : {elem.category}</div>
      <div>
        {" "}
        <img src={elem.img_url} alt="post image" className="postPic"></img>pic
      </div>
      <div>Location : {elem.location}</div>
      <div>PhoneNumber :{elem.PhoneNumber}</div>
      <div>Price :{elem.price}</div>
      <div>StartDate : {elem.fromdate}</div>
      <div>EndDate : {elem.todate}</div>
      <div>Description : ||{elem.description}||</div>
    </li>
  ));

  return (
    <div className="profile">
      <img src={userPic} alt="profile pic" className="pPic"></img>
      <nav className="pNav">{Fullname} Profile</nav>
      <div className="pPosts">
        {Fullname} posts{" "}
        <button onClick={() => getPosts()}>get posts info</button>
        <p>update post </p>
        <button
          onClick={() => (updating ? setUpdating(false) : setUpdating(true))}
        >
          update post
        </button>
        {updating ? (
          <div>
            <input onChange={UTitle} placeholder="new title" />
            <input onChange={uNum} placeholder=" Num" />
            <input type="date" onChange={uStart} placeholder="new Start date" />
            <input type="date" onChange={uEnd} placeholder="new End date" />
            <select onChange={uCategory} placeholder="Select Category">
              catagory
              <option>select catagory</option>
              <option>Cars</option>
              <option>Mobile Tablet</option>
              <option>tools</option>
            </select>
            <select onChange={uLocation}>
              <option>Select Country:</option>
              <option>Amman</option>
              <option>Zarqa</option>
              <option>Irbid</option>
              <option>Karak</option>
              <option>Tafila</option>
            </select>
            <input onChange={u_img_url} placeholder="new img_url" />
            <input onChange={uName} placeholder="new Name" />
            <input onChange={uPrice} placeholder="new Price" />
          </div>
        ) : (
          <div></div>
        )}
        <ul className="pPostsList">{newArr}</ul>
        <Link className="link" to="/add">
          <button>ADD ITEM TO RENT</button>
        </Link>
      </div>
      <div className="pInfo">
        <p>userInfo</p>
        <input onChange={userId} />

        <button onClick={() => getUser(id)}>get user info</button>
        {loading ? (
          <div class="loader"></div>
        ) : (
          <div className="userInfo">
            <p>user name : {Fullname}</p>
            <p>birthday :{dob} </p>
            <p>address :{address} </p>
            <p> email :{email}</p>
            <Userprofile />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
