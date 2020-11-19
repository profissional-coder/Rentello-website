import React, { useState, useEffect } from "react";
import {
  Link,
  BrowserRouter as Router,
  Redirect,
  Route,
} from "react-router-dom";
import axios from "axios";
// import "./App.css";
import Render from "./Render";

const Additem = () => {
  const [post, setPost] = useState([]);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [IMG, setIMG] = useState("");
  const [from_date, setStartDate] = useState("");
  const [to_date, setEndDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const CreateAllPost = (infoArgumnt) => {
    console.log(infoArgumnt);

    axios
      .post("http://localhost:5000/post/create", infoArgumnt)
      .then((response) => {
        console.log("response", response);
        const newArray = [...post];
        newArray.push(response.data);
        setPost(newArray);
      })
      .catch((err) => {
        console.log("RESULT: ", err);
      });
  };

  const SavePost = () => {
    CreateAllPost({
      price: price,
      category: category,
      name: name,
      description: description,
      location: location,
      from_date: from_date,
      to_date: to_date,
      PhoneNumber: phoneNumber,
      img_url: IMG,
    });
  };
  return (
    <form className="form">
      <section>
        <label>Name</label>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          type="text"
          placeholder="Name What are you renting"
        ></input>
      </section>

      <section>
        <label>Price</label>
        <input
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          type="Number"
          value={price}
          placeholder="Price"
        ></input>
      </section>

      <section>
        <label>Category</label>
        <select
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          value={category}
          placeholder="Select Category"
        >
          <option value="tools">Tools</option>
          <option value="device">Device</option>
          <option value="electrical-machines">Electrical Machines</option>
          <option value="instrument">Instrument</option>
          <option value="apparatus">apparatus</option>
        </select>
      </section>

      <section>
        <label>Location</label>
        <select
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        >
          <option value="0">Select City:</option>
          <option value="amman">Amman</option>
          <option value="zarqa">Zarqa</option>
          <option value="irbid">Irbid</option>
          <option value="karak">Karak</option>
          <option value="tafila">Tafila</option>
        </select>
      </section>

      <section>
        <label>Start Date</label>
        <input
          onChange={(e) => {
            setStartDate(e.target.value);
          }}
          type="Date"
          value={from_date}
        ></input>
      </section>

      <section>
        <label>End Date</label>
        <input
          onChange={(e) => {
            setEndDate(e.target.value);
          }}
          type="Date"
          value={to_date}
        ></input>
      </section>

      <section>
        <label>Phone number</label>
        <input
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          type="tel"
          value={phoneNumber}
          placeholder="Phone Number"
        ></input>
      </section>

      <section>
        <label>Description</label>
        <textarea
          placeholder="Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>
      </section>

      <section>
        <label>Description</label>
        <input
          onChange={(e) => {
            setIMG(e.target.value);
          }}
          type="file"
          name="image"
          value={IMG}
        ></input>
      </section>

      <Link className="link" to="/showpost">
        <input onClick={SavePost} type="submit" value="Save" className="btn" />
      </Link>
    </form>
  );
};
export default Additem;

{
  /* <Link className="link" to="/showpost"> </Link> */
}
