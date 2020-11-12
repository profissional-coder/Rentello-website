import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


const App = () => {
  const [post, setPost] = useState([]);
  const [price, setprice] = useState(0)
  const [Category, setCategory] = useState('')
  const [Title, setTitle] = useState('')
  const [Description, setDescription] = useState('')
  const [Location, setLocation] = useState('')
  const [IMG, setIMG] = useState('')
  const [StartDate, setStartDate] = useState('')
  const [EndDate, setEndDate] = useState('')
  const [Name, setName] = useState('')
  const [PhoneNumber, setPhoneNumber] = useState(0)

  const CreateAllPost = (infoArgumnt) => {
    console.log(infoArgumnt)
    
    axios
      .post('http://localhost:5000/posts/create', infoArgumnt)
      .then((response) => {
        console.log("response",response)
        const newArray = [...post];
        newArray.push(response.data)
        setPost(newArray);
      })
      .catch((err) => {
        console.log('RESULT: ', err);
      });
  };

  const SavePost= () => {
    
    CreateAllPost({price:price, category:Category,title:Title,description:Description,location:Location,fromdate:StartDate,todate:EndDate,name:Name,PhoneNumber:PhoneNumber,img_url:IMG})
    
  };
  return (
    <div>
      <div className='A'>
      <div className='ChooseaDepartment'> 
        <span> 1 </span>
        <strong>Choose a Department</strong>
        </div>
        <div className="section">
        <label> Choose the main section </label>
        <select onChange={(e) => {
          setCategory(e.target.value)
        }}>
            <option>Cars</option>
            <option>Mobile Tablet</option>
          </select>
        </div>
           </div>



           
             <div className='Details'> 
                    <span> 2 </span>
                    <strong>Details</strong>
            </div>
             <div className='B'>
             <div className="Title">
              <span>Post Title  </span>
              <input onChange={(e) =>{setTitle(e.target.value)}} type='text' placeholder="Write Post Title Here"></input>
              <span>Description </span>
              <textarea onChange={(e) => {setDescription(e.target.value)}}></textarea>
             </div>
        
        
             <div className='Location'>
              <label for="Locations">Location </label>
              <select onChange={(e) => {setLocation(e.target.value)}}>
                <option value='1'>Amman</option>
                <option>Zarqa</option>
                <option>Irbid</option>
                <option>Karak</option>
                <option>Tafila</option>
             </select>
          <div className='Price'>
              <label>Price </label>
              <input onChange={(e) => {setprice(e.target.value)}} type="Number" placeholder="10"></input> 
              <input  type="text" placeholder="hr"></input>
          </div>
          <div className='IMG'>
            <input onChange={(e) => {setIMG(e.target.value)}}  type="file" name="image"></input>
          </div>
        </div>
      </div>



      <div className='DateRange'> 
        <span> 3 </span>
        <strong>Date Range</strong>
        </div>
        <div className='C'>
        <div className='Date'>
         <label>Start Date </label>
         <input onChange={(e) => {setStartDate(e.target.value)}} type="datetime-local"></input>
         <label>End Date </label>
         <input onChange={(e) => {setEndDate(e.target.value)}} type="datetime-local"></input>
       </div>
         </div>

      <div className='contactInformation'> 
        <span> 4 </span>
        <strong>Contact Information</strong>
        </div>
        <div className='D'>
        <div className='PhoneNumber'>
          <label>Name </label>
          <input onChange={(e) => {setName(e.target.value)}} type='text' placeholder ='Name'></input>
          <label>Phone Number </label>
          <input onChange={(e) => {setPhoneNumber(e.target.value)}} type='tel' placeholder ='079'></input>
        </div>
        </div>
        <div className='E'>
            <div className='Save'>
              <button onClick={SavePost}> Save </button>
            </div>
            </div>
    </div>
    
  );
};
export default App;

