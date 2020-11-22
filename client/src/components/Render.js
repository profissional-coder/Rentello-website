import React, { useState, useEffect } from "react";
import axios from "axios";
const Render = (props) => {
  const [Category, setCategory] = useState("");
  const [Img_url, setImg_url] = useState("");
  const [Location, setLocation] = useState("");
  const [Name, setName] = useState("");
  const [To_date, setTo_date] = useState("");
  const [From_date, setFrom_date] = useState("");
  const [Price, setPrice] = useState(0);

  useEffect(() => {
    getlastpost();
  });

  const getlastpost = () => {
    axios
      .get("/getlastpost")
      .then((response) => {
        console.log("response", response.data);
        setPrice(response.data[0].price);
        // console.log('response.data[0].price :',response.data[0].price);
        setCategory(response.data[0].category);
        setImg_url(response.data[0].img_url);
        setLocation(response.data[0].locatin);
        setName(response.data[0].name);
        setTo_date(response.data[0].to_date);
        setFrom_date(response.data[0].from_date);
      })
      .catch((err) => {
        console.log("RESULT: ", err);
      });
  };

  return (
    <div className="post-page">
      <div className="post">
        {/* <button onClick={getlastpost}>get</button> */}
        <img src={Img_url} className="post-img"></img>
        <div className="post-info">
          <p>Category: {Category}</p>
          <p>Name: {Name}</p>
          <p>price:{Price}</p>
          <p>From Date: {From_date}</p>
          <p>To Date: {To_date}</p>
          <p>Location: {Location}</p>
          <button className="btn">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Render;
