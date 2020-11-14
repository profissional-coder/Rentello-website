import React, { useState } from "react";
import validate from "./handleErrorLogin";
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
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
    e.preventDefault();
    setErrors(validate(values));
    axios
      // Bath from BE
      .post("http://localhost:3000/login", values)
      .then((result) => {
        console.log(result);
        if (result.data) {
          localStorage.setItem("token", result.data);
        }
      })
      .catch((err) => {
        console.log("ERR : ", err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="form-input">
          <label>Email </label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
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
            placeholder="Enter your Password"
            value={values.password}
            onChange={handleChange}
          ></input>
          {errors.password && <p> {errors.password} </p>}
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
