import React, { useState, useEffect } from 'react';
import validate from "./handleErrorRegister";
import axios from 'axios';
const Post =()=>{


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
  
    const [errors, setErrors] = useState({});
    useEffect(() => {
      console.log('========= USEEFFECT CALLED =========');
      getAll();
    }, []);
  
    
    const getAll = () => {
        axios
          .get('http://localhost:5000/post/get')
          .then((response) => {
            console.log('DATA: ', response.data);
            setPost(response.data);
          })
          .catch((err) => {
            console.log('RESULT: ', err);
          });
      };
    
    const CreateAllPost = (infoArgumnt) => {
      console.log(infoArgumnt)
      
      axios
        .post('http://localhost:5000/post/create', infoArgumnt)
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
      
      <div class="padding-all">
          <div class="design">
              <div class="mail-form-agile">
                <form post='submit'>              
                   <input onChange={(e) =>{setTitle(e.target.value)}} type='text' placeholder="Write Post Title Here" required=''></input>
                   <input onChange={(e) => {setprice(e.target.value)}} type="Number" placeholder="Price" required></input>
               <select onChange={(e) => {setCategory(e.target.value)}} placeholder="Select Category">
                              <option>Cars</option>
                              <option>Mobile Tablet</option>
                      </select>
               <select onChange={(e) => {setLocation(e.target.value)}}>
                          <option value='0'>Select Country:</option>
                          <option value='1'>Amman</option>
                          <option >Zarqa</option>
                          <option>Irbid</option>
                          <option>Karak</option>
                          <option>Tafila</option>
                       </select>
                     
                       <span>Start Date</span><input onChange={(e) => {setStartDate(e.target.value)}} type="datetime-local"></input>
                       <span>End Date</span><input onChange={(e) => {setEndDate(e.target.value)}} type="datetime-local"></input>
               <input onChange={(e) => {setName(e.target.value)}} type='text' placeholder ='Name'></input>
               <input onChange={(e) => {setPhoneNumber(e.target.value)}} type='tel' placeholder ='Phone Number'></input>
               <textarea placeholder='Description' onChange={(e) => {setDescription(e.target.value)}}></textarea>
               <input onChange={(e) => {setIMG(e.target.value)}}  type="file" name="image"></input>
                       <input onClick={SavePost} type="submit" value='Save'></input>
                       </form>
        </div>
          
            <div class="clear"> </div>
          </div>
      </div>
      
    );
  };
  export default Post;
