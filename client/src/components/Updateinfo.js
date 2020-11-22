import React, { useState } from "react";
import axios from "axios";
const Updateinfo = () => {
  const [email, setemail] = useState("");
  const [Fullname, setFullname] = useState("");
  const [password, setpassword] = useState("");
  const [city, setcity] = useState("");
  const [address, setaddress] = useState("");
  const [dob, setdob] = useState("");
  const [img_url, setimg_url] = useState("");

  const updateinfo = () => {
    const data = {
      email: email,
      Fullname: Fullname,
      password: password,
      city: city,
      address: address,
      img_url: img_url,
      dob: dob,
    };
    console.log("data : ", data);
    axios
      .put("/users/update", data)
      .then((response) => {
        //   console.log("response", response.data);
      })
      .catch((err) => {
        console.log("RESULT: ", err);
      });
  };

  return (
    <form className="form">
      <section>
        {" "}
        <label> Your Email </label>
        <input
          type="text"
          placeholder="Enter your email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
      </section>
      <section>
        {" "}
        <label> New Name </label>
        <input
          type="text"
          onChange={(e) => {
            setFullname(e.target.value);
          }}
        />
      </section>
      <section>
        {" "}
        <label>New Password </label>
        <input
          type="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />{" "}
      </section>
      <section>
        {" "}
        <label>New City </label>
        <input
          type="text"
          onChange={(e) => {
            setcity(e.target.value);
          }}
        />{" "}
      </section>
      <section>
        {" "}
        <label>New Address </label>
        <input
          type="text"
          onChange={(e) => {
            setaddress(e.target.value);
          }}
        />{" "}
      </section>
      <section>
        {" "}
        <label>Date Of Birthday</label>
        <input
          type="text"
          onChange={(e) => {
            setdob(e.target.value);
          }}
        />
      </section>

      <section>
        {" "}
        <label>New Image </label>
        <input
          type="file"
          onChange={(e) => {
            setimg_url(e.target.value);
          }}
        />
      </section>
      <section>
        <button onClick={updateinfo} className="btn">
          Save Changes
        </button>
      </section>
    </form>
  );
};
export default Updateinfo;
