import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

const Rent = (props) => {
  const [infoPost, setInfoPost] = useState([]);
  //    console.log('post_id : ',props.location.state);

  const createOrder = () => {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    console.log(decoded);
    const id = decoded.user_id;
    const data = {
      post_id: props.location.state,
      user_id: decoded.user_id,
      from_date: "12-3-2020",
      to_date: "13-12-2020",
    };
    console.log("data :", data);

    axios
      .post(`http://localhost:5000/orders/create`, data)
      .then((response) => {
        // console.log("response",response.data);
        //  setInfoPost(response.data);
      })

      .catch((err) => {});
  };

  useEffect(() => {
    getPost();
  });

  const getPost = async () => {
    // console.log(props.location.state);
    axios
      .get(`http://localhost:5000/post/${props.location.state}`)
      .then((response) => {
        // console.log("response",response.data);
        setInfoPost(response.data);
      })

      .catch((err) => {});
  };
  const newArr = infoPost.map((elem, index) => (
    <div num={index + 1} key={index} className="post">
      <div className="post-info">
        <div>Category: {elem.category}</div>
        <div>Location: {elem.location}</div>
        <div>Phone Number:{elem.PhoneNumber}</div>
        <div>Price: {elem.price}</div>
        <div>StartDate: {elem.fromdate}</div>
        <div>EndDate: {elem.todate}</div>
        <div>Description: {elem.description}</div>
        <button onClick={createOrder} className="rent-btn btn">
          RENT ONLINE
        </button>
      </div>
      <img className="img" src={elem.img_url} alt="post image"></img>
    </div>
  ));

  return (
    <div>
      {/* <button onClick={getPost}>show</button> */}
      {/* <p> name: {Name}</p> */}
      {newArr}
    </div>
  );
};

export default Rent;
