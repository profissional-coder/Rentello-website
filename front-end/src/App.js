import React from 'react';
import './App.css';


const App = () => {
  
  
  
  return (
    <div>
      <div className='PostTitle'>
        <label>Post Title  </label>
        <input type='text' placeholder="Write Post Title Here"></input>
    </div>

    <div className='A'>
    <div className='Description'>
        <p>Description</p>
        <textarea></textarea>
    </div>
       <div className='DateRange'>
         <p>Date Range</p>
         <input type="date"></input>
         <p>Category</p>
          <select>
            <p>Category</p>
            <option>a</option>
            <option>a</option>
            <option>a</option>
          </select>
       </div>
      </div>
        <div className='B'>
       <div className="Locations">
         <label for="Locations">Location </label>
            <select>
              <option>Amman</option>
              <option>Zarqa</option>
              <option>Irbid</option>
              <option>Karak</option>
              <option>Tafila</option>
            </select>
        </div>
        <div className='PhoneNumber'>
          <label>Phone Number </label>
          <input type='Number' placeholder ='079'></input>
        </div>
        </div>
        <div className="C">
       <div className='Price'>
         <label>Price </label>
         <input type="Number" placeholder="10"></input> / 
          <input type="text" placeholder="hr"></input>
       </div>
       </div>

       <div className="D">
       <div className='IMG'>
         <label>IMG </label>
         <input type="file" placeholder="up load" id="img" name="img" accept="image/png, image/jpeg"></input>
         
       </div>
       </div>
    </div>
    
  );
};
export default App;


