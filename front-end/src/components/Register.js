import React, { useState } from "react";
import validate from "./handleError";
import axios from "axios";

const Register = () => {
  const [values, setValues] = useState({
    Fullname: "",
    email: "",
    password: "",
    password2: "",
    city: "",
    address: "",
    dob: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    console.log(e);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    

    console.log("aaa", values);
    setErrors(validate(values));


    e.preventDefault();
    // setErrors(validate(values));
    axios
      .post("http://localhost:5000/register", values)
      .then((result) => {
        // console.log("result : ",result);
      })
      .catch((err) => {
        console.log("ERR : ", err);
      });
  };




  return (
    <div className="Register-container">
      <form onSubmit={handleSubmit}>
        <h1>Register User</h1>
        <div className="form-input">
          <label>Username </label>
          <br />
          <input
            type="text"
            name="Fullname"
            placeholder="enter your username"
            value={values.Fullname}
            onChange={handleChange}
          ></input>
          {errors.Fullname && <p> {errors.Fullname} </p>}
        </div>
        <br />
        <div className="form-input">
          <label>Email </label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            value={values.email}
            onChange={handleChange}
          ></input>
          {errors.email && <p> {errors.email} </p>}
        </div>
        <br />
        <div className="form-input">
          <label>Password </label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="enter password"
            value={values.password}
            onChange={handleChange}
          ></input>
          {errors.password && <p> {errors.password} </p>}
        </div>
        <br />
        <div className="form-input">
          <label>Confirm Password </label>
          <br />
          <input
            type="password"
            name="password2"
            placeholder="confirm password"
            value={values.password2}
            onChange={handleChange}
          ></input>
          {errors.password2 && <p> {errors.password2} </p>}
        </div>
        <br />
        <div className="form-input">
          <label>City </label>
          <br />
          <input
            type="text"
            name="city"
            placeholder="your City"
            value={values.city}
            onChange={handleChange}
          ></input>
          {errors.city && <p> {errors.city} </p>}
        </div>
        <br />
        <div className="form-input">
          <label>Address </label>
          <br />
          <input
            type="text"
            name="address"
            placeholder="your address"
            value={values.address}
            onChange={handleChange}
          ></input>
        </div>
        <br />
        <div className="form-input">
          <label>Date Of Birth </label>
          <br />
          <input
            type="date"
            name="dob"
            value={values.password}
            onChange={handleChange}
          ></input>
        </div>
        <br />
        <button   type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;