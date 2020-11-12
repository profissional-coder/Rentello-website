import React, { useState } from "react";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    city: "",
    address: "",
    DOB: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="Register-container">
      <form>
        <h1>Register User</h1>
        <div>
          <label>Username </label>
          <br />
          <input
            type="text"
            name="username"
            placeholder="enter your username"
            value={values.username}
            onChange={handleChange}
          ></input>
        </div>
        <br />
        <div>
          <label>Email </label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            value={values.email}
            onChange={handleChange}
          ></input>
        </div>
        <br />
        <div>
          <label>Password </label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="enter password"
            value={values.password}
            onChange={handleChange}
          ></input>
        </div>
        <br />
        <div>
          <label>Confirm Password </label>
          <br />
          <input
            type="password"
            name="password2"
            placeholder="confirm password"
            value={values.password2}
            onChange={handleChange}
          ></input>
        </div>
        <br />
        <div>
          <label>City </label>
          <br />
          <input
            type="text"
            name="city"
            placeholder="your City"
            value={values.city}
            onChange={handleChange}
          ></input>
        </div>
        <br />
        <div>
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
        <div>
          <label>Date Of Birth </label>
          <br />
          <input
            type="date"
            name="DOB"
            value={values.password}
            onChange={handleChange}
          ></input>
        </div>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
