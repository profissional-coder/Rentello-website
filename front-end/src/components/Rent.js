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
      fromdate: "12-3-2020",
      todate: "13-12-2020",
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
    <li num={index + 1} key={index}>
      <div>Category : {elem.category}</div>
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
    </li>
  ));

  return (
    <div>
      {/* <button onClick={getPost}>show</button> */}
      {/* <p> name: {Name}</p> */}
      {newArr}
      <button onClick={createOrder}> RENT ONLINE </button>
    </div>
  );
};

export default Rent;
