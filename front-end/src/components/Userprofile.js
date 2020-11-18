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
    <li num={index + 1} key={index}>
      <div className="postTitle"></div>
      <div>Category : {elem.category}</div>
      <div>
        {" "}
        <img className="img" src={elem.img_url} alt="post image"></img>
      </div>
      <div>Name : {elem.Fullname}</div>

      <div>Location : {elem.location}</div>
      <div>Price :{elem.price}</div>
      <div>StartDate : {elem.fromdate}</div>
      <div>EndDate : {elem.todate}</div>
    </li>
  ));

  return (
    <div>
      <p>malik </p>
      <Link className="link" to="/update">
        <button>Update</button>
      </Link>

      <button onClick={getorder}> orders</button>
      {newArr}
    </div>
  );
};

export default Userprofile;
