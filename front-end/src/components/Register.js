import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="submit-form">
          <div>
            <label>User Name </label>
            <input type="text" placeholder="enter your username"></input>
          </div>
          <br></br>
          <div>
            <label>Email </label>
            <input type="email" placeholder="enter your email"></input>
          </div>
          <br></br>
          <div>
            <label>Password </label>
            <input type="password" placeholder="enter your password"></input>
          </div>
          <br></br>
          <div>
            <label>Confirm Password </label>
            <input type="password" placeholder="confirm your password"></input>
          </div>
          <br></br>
          <div>
            <label>City </label>
            <input type="text" placeholder="your City"></input>
          </div>
          <br></br>
          <div>
            <label>Address </label>
            <input type="text" placeholder="your address"></input>
          </div>
          <br></br>
          <div>
            <label>Date Of Birth </label>
            <input type="date"></input>
          </div>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
