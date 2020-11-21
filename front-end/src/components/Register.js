import React, { useState } from "react";
import validate from "./handleErrorRegister";
import axios from "axios";
import { withRouter } from "react-router-dom";

const Register = (props) => {
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

    e.preventDefault();
    setErrors(validate(values));
    axios
      // Bath from BE
      .post("http://localhost:5000/register", values)
      .then((result) => {
        // console.log("result : ",result);
        props.history.push("/");
      })
      .catch((err) => {
        console.log("ERR : ", err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>Register User</h1>
      <section className="form-input">
        <label>Username </label>
        <input
          type="text"
          name="Fullname"
          placeholder="enter your Fullname"
          value={values.Fullname}
          onChange={handleChange}
        ></input>
        {errors.Fullname && <p className="input-error"> {errors.Fullname} </p>}
      </section>
      <section className="form-input">
        <label>Email </label>
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          value={values.email}
          onChange={handleChange}
        ></input>
        {errors.email && <p className="input-error"> {errors.email} </p>}
      </section>

      <section className="form-input">
        <label>Password </label>

        <input
          type="password"
          name="password"
          placeholder="enter password"
          value={values.password}
          onChange={handleChange}
        ></input>
        {errors.password && <p className="input-error"> {errors.password} </p>}
      </section>

      <section className="form-input">
        <label>Confirm Password </label>

        <input
          type="password"
          name="password2"
          placeholder="confirm password"
          value={values.password2}
          onChange={handleChange}
        ></input>
        {errors.password2 && (
          <p className="input-error"> {errors.password2} </p>
        )}
      </section>

      <section className="form-input">
        <label>City </label>

        <input
          type="text"
          name="city"
          placeholder="your City"
          value={values.city}
          onChange={handleChange}
        ></input>
        {errors.city && <p className="input-error"> {errors.city} </p>}
      </section>

      <section className="form-input">
        <label>Address </label>

        <input
          type="text"
          name="address"
          placeholder="your address"
          value={values.address}
          onChange={handleChange}
        ></input>
      </section>

      <section className="form-input">
        <label>Date Of Birth </label>

        <input
          type="date"
          name="dob"
          value={values.dob}
          onChange={handleChange}
        ></input>
      </section>

      <button type="submit" className="btn">
        Register
      </button>
    </form>
  );
};

export default withRouter(Register);
