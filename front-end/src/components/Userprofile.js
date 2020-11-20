import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

const Userprofile = () => {
  const [orders, setOrders] = useState([]);

  const getorder = () => {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    // console.log(decoded.user_id);
    const id = decoded.user_id;
    axios
      .get(`http://localhost:5000/orders/${id}`)
      .then((response) => {
        setOrders(response.data);
      })

      .catch((err) => {});
  };

  const newArr = orders.map((elem, index) => (
    <div num={index + 1} key={index} className="post-item">
      <div className="post-info">
        <div>Category : {elem.category}</div>
        <div>Name : {elem.Fullname}</div>
        <div>Location : {elem.location}</div>
        <div>Price :{elem.price}</div>
        <div>StartDate : {elem.fromdate}</div>
        <div>EndDate : {elem.todate}</div>
      </div>
      <img className="img" src={elem.img_url} alt="post image"></img>
    </div>
  ));

  return (
    <div className="profile-actions">
      {/* <p>Malik</p> */}
      {/* <div ><Profile/></div>   */}
      <div className="buttons">
        <Link className="link" to="/update">
          <button className="btn">Update</button>
        </Link>
        <button onClick={getorder} className="btn">
          orders
        </button>
      </div>
      <div className="post-container">{newArr}</div>
    </div>
  );
};

export default Userprofile;
