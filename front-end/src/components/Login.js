import React, { useState } from "react";
import validate from "./handleErrorLogin";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [islogin, setIslogin] = useState(false);
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
    e.preventDefault();
    setErrors(validate(values));
    axios
      // Bath from BE
      .post("http://localhost:5000/login", values)
      .then((result) => {
        console.log(result);
        if (result.data) {
          localStorage.setItem("token", result.data);
        } else {
          setErrors({ errors: "Invalid Email or Password" });
        }
      })
      .catch((err) => {
        console.log("ERR : ", err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>Login</h1>
      <section className="form-input">
        <label>Email </label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={values.email}
          onChange={handleChange}
        ></input>
        {errors.email && <p className="input-error"> {errors.email} </p>}
      </section>
      <br />
      <section className="form-input">
        <label>Password </label>
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={values.password}
          onChange={handleChange}
        ></input>
        {errors.password && <p className="input-error"> {errors.password} </p>}
      </section>
      <br />

      <button className="btn" type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
