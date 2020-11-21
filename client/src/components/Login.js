import React, { useState , useEffect,useHistory} from "react";
import validate from "./handleErrorLogin";
import axios from "axios";
import { Redirect, withRouter } from "react-router-dom";


const Login = (props) => {
  const [values, setValues] = useState({
    email: "",
    password: ""
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
      .post("http://localhost:5000/login", values)
      .then((result) => {
        console.log(result);
        if (!result.data.error) {
          localStorage.setItem("token", result.data);
          props.history.push("/");
        } else {
          setErrors({ ...errors, validation: "Invalid Email or Password" });
        }

      })
      .catch((err) => {
        console.log("ERR : ", err);
      });
      
      
  };

 
  return (
    <form onSubmit={handleSubmit} className="form">
      {/* {islogin ? <Redirect to="/user/profile" /> : <Redirect to="/login" />} */}

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
      {errors.validation && <p className="input-error">{errors.validation}</p>}
      <button className="btn" type="submit">
        Login
      </button>
    </form>

  );
}

export default withRouter(Login);
