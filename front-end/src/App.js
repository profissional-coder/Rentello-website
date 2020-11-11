import React from 'react';
import './App.css';


const App = () => {
  
  
  
  return (
    <div>
      <div className='ChooseaDepartment'> 
        <span> 1 </span>
        <strong>Choose a Department</strong>
        </div>
        <div className="section">
        <label> Choose the main section </label>
        <select>
            <option>Cars</option>
            <option>Mobile Tablet</option>
            <option>a</option>
          </select>
        </div>
           
      <div className='Details'> 
        <span> 2 </span>
        <strong>Details</strong>
        </div>
        <div className="A">
        <div className="Title">
        <span>Post Title  </span>
        <input type='text' placeholder="Write Post Title Here"></input>
        <span>Description </span>
        <textarea></textarea>
        </div>
        
        
        <div className='Location'>
        <label for="Locations">Location </label>
            <select>
              <option>Amman</option>
              <option>Zarqa</option>
              <option>Irbid</option>
              <option>Karak</option>
              <option>Tafila</option>
            </select>

          <label>Price </label>
          <input type="Number" placeholder="10"></input> 
          <input type="text" placeholder="hr"></input>

          <div className='IMG'>
        
         <input  type="file" name="image"></input>
       </div>
       
        </div>
      </div>
      <div className='DateRange'> 
        <span> 3 </span>
        <strong>Date Range</strong>
        </div>
        <div className='Date'>
         <label>Start Date </label>
         <input type="datetime-local"></input>
         <label>End Date </label>
         <input type="datetime-local"></input>
       </div>


      <div className='contactInformation'> 
        <span> 4 </span>
        <strong>Contact Information</strong>
        </div>
        <div className='PhoneNumber'>
          <label>Name </label>
          <input type='text' placeholder ='Name'></input>
          <label>Phone Number </label>
          <input type='tel' placeholder ='079'></input>
        </div>
        
            <div className='Save'>
              <button> Save </button>
            </div>
    </div>
    
  );
};
export default App;

