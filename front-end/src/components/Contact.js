import React, { useState } from "react";
import axios from 'axios';
const Contact = () => {
  const [contact, setContact] = useState([]);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  
  const CreateAllContact = (infoArgumnt) => {
    axios
      .post('http://localhost:5000/contact', infoArgumnt)
      .then((response) => {
        console.log("response",response)
        const newArray = [...contact];
        newArray.push(response.data)
        setContact(newArray);
      })
      .catch((err) => {
        console.log('RESULT: ', err);
      });
  };
  const Send= () => { 
    CreateAllContact({name:name,subject:subject,email:email,Message:Message})
  };
  return (
    <div className='Contact'>
      <div className='con'>
      <input onChange={(e) =>{setName(e.target.value)}} type='text' placeholder='Name'></input>
      <input onChange={(e) =>{setEmail(e.target.value)}} type='email' placeholder='email'></input>
      <input onChange={(e) =>{setSubject(e.target.value)}} type='text' placeholder='Subject'></input>
      <input onChange={(e) =>{setMessage(e.target.value)}} type='text' placeholder='Message'></input><br></br>
      
      <button onClick={Send}> Send </button><br></br>
      </div>
    </div>
  );
};

export default Contact;
