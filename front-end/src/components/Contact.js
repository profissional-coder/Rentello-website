import React, { useState } from "react";
import axios from 'axios';
const Contact = () => {
  
  const [contact, setContact] = useState({
    name:"",
    subject:"",
    email:"",
    Message:""
  });
  
  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      
      .post("http://localhost:5000/contact", contact)
      .then((result) => {
          console.log("result : ",result);

      })
      .catch((err) => {
        console.log("ERR : ", err);
      });
  };

  return (
    <div className='Contact'>
      <div className='con'>
      <form onSubmit={handleSubmit}>
      <input  type='text' name='name' placeholder='Name' value={contact.name} onChange={handleChange}></input>
      <input  type='email' name='email' placeholder='email' value={contact.email} onChange={handleChange}></input>
      <input  type='text' name='subject' placeholder='Subject' value={contact.subject} onChange={handleChange}></input>
      <input  type='text' name='Message' placeholder='Message' value={contact.Message} onChange={handleChange}></input><br></br>
      
      <button type='submit'> Send </button><br></br>
      </form>
      </div>
    </div>
  );
};

export default Contact;
