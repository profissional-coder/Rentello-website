import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


const App = () => {
  const [Post, setPost] = useState([]);
  const [Category, setCategory] = useState('')
  const [Title, setTitle] = useState('')
  const [Description, setDescription] = useState('')
  const [Location, setLocation] = useState('')
  const [Price1, setPrice1] = useState('')
  const [Price2, setPrice2] = useState('')
  const [IMG, setIMG] = useState('')
  const [StartDate, setStartDate] = useState('')
  const [EndDate, setEndDate] = useState('')
  const [Name, setName] = useState('')
  const [PhoneNumber, setPhoneNumber] = useState('')


  const getAllPost = () => {
    axios
      .get('http://localhost:5000/tasks')
      .then((response) => {
        console.log('DATA: ', response.data);
        setPost(response.data);
      })
      .catch((err) => {
        console.log('RESULT: ', err);
      });
  };
  const CreateAllPost = () => {
    const newus = { Category:Category,Title:Title,Description:Description,Location:Location,Price1:Price1,Price2:Price2,IMG:IMG,StartDate:StartDate,EndDate:EndDate,Name:Name,PhoneNumber:PhoneNumber }
    axios
      .post('http://localhost:5000/Post', newus)
      .then((response) => {
        const newArray = [...Post];
        newArray.push(response.data)
        setPost(newArray);

      })
      .catch((err) => {
        console.log('RESULT: ', err);
      });
  };
  
  const SavePost= () => {
    CreateAllPost([Category.data,Title.data,Description.data,Location.data,Price1.data,Price2.data,IMG.data,StartDate.data,EndDate.data,Name.data,PhoneNumber.data])
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
                <option>Amman</option>
                <option>Zarqa</option>
                <option>Irbid</option>
                <option>Karak</option>
                <option>Tafila</option>
             </select>
          <div className='Price'>
              <label>Price </label>
              <input onChange={(e) => {setPrice1(e.target.value)}} type="Number" placeholder="10"></input> 
              <input onChange={(e) => {setPrice2(e.target.value)}} type="text" placeholder="hr"></input>
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

