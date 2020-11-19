import React, { useState , useEffect} from "react";
import validate from "./handleErrorLogin";
import axios from "axios";
import { Redirect,useHistory } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [islogin, setIslogin] = useState(false);
  const [errors, setErrors] = useState({});
  const history = useHistory();

  
 
  
  
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
        // console.log(result);
        setIslogin(true)
        localStorage.setItem("token", result.data);

      })
      .catch((err) => {
        console.log("ERR : ", err);
      });
      
      
  };

 
  return (
    <div className="login-container">
  {islogin?(history.push("/user/profile")):(history.push("/login"))}

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
        <br />
        <button type="submit" >Login</button>
      </form>
    </div>
  );
}

export default Login;
