import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, withRouter } from "react-router";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Link,
} from "react-router-dom";
import PostsSearch from "./PostsSearch";

const Renderall = (props) => {
  // const [info, setInfo] = useState([]);
  // const [infoPosts, setInfoPosts] = useState([]);
  // const [postPic, setPostPic] = useState("");
  // const [address, setAddress] = useState("");
  // const [Fullname, setFullname] = useState("");
  // const [dob, doBset] = useState("");
  // const [email, setEmail] = useState("");
  const [allPosts, setAllPosts] = useState([]);


  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    axios
      .get(`http://localhost:5000/posts`)
      .then((response) => {
        // console.log("response", response);

        // setInfoPosts(response.data);
        setAllPosts(response.data);

        //  setTitle(response.data)
        //  setPhoneNumber(response.data)
        //  setPostdate(response.data)
        //  setStartDate(response.data)
        //  setEndDate(response.data)
        //  setCategory(response.data)
        //  setDescription(response.data)
        // if (infoPosts.length === []) {
        //   alert("no posts found");
        // }
      })
      .catch((err) => {
        console.log("RESULT: ", err);
      });
  };

  // const newArr = infoPosts.map((elem, index) => (
  // <Link
  //   className="link"
  //   to={{
  //     pathname: "/rent",
  //     state: elem.post_id,
  //   }}
  //   style={{ textDecoration: "none" }}
  // >
  //   <li num={index + 1} key={index} className="post-item">
  //     {/* <Link className="link" to="/rent" state={ {infoPosts}} > */}
  //     <div className="post-info">
  //       <h2 className="post-title">
  //         {elem.name}
  //         <span>
  //           Post {index + 1} || posted at: {elem.postdate}
  //         </span>
  //       </h2>
  //       <span>Category: {elem.category}</span>
  //       <span>Location: {elem.location}</span>
  //       {/* <div>PhoneNumber :{elem.PhoneNumber}</div> */}
  //       <span>Price: {elem.price}</span>
  //       {/* <div>StartDate : {elem.fromdate}</div>
  //     <div>EndDate : {elem.todate}</div>
  //     <div>Description : ||{elem.description}||</div> */}
  //     </div>
  //     <img className="img" src={elem.img_url} alt="post image" />
  //   </li>
  // </Link>
  // ));


  return (
    <div>
      <div className="pPosts">
        {/* <button onClick={() => getPosts()}>get posts info</button> */}
        <PostsSearch allItems={allPosts} props={props} />
        {/* <ul className="post-container">{newArr}</ul> */}
      </div>
    </div>
  );
};
export default withRouter(Renderall);
