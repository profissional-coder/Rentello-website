import React, { useState , useEffect} from 'react'
import axios from "axios";
const Rent = (props) => {
    const [infoPost, setInfoPost] = useState([]);
    const [Name, setName] = useState("");
    //    console.log('post_id : ',props.location.state);
   
   
   
  useEffect(() => {
    getPost()
  });
   
    const getPost = async () => {
        // console.log(props.location.state);
        axios
          .get(`http://localhost:5000/post/${props.location.state}`)
          .then((response) => {
            // console.log("response",response.data);
            setInfoPost(response.data);
            setName(response.data[0].name)
        })
       
          .catch((err) => {
          });          
      };   
      const newArr = infoPost.map((elem, index) => (
        <li num={index + 1} key={index}>
            <div>Category : {elem.location}</div>
            <div>
              {" "}
              <img className="img" src={elem.img_url} alt="post image"></img>
            </div>
            <div>Location : {elem.category}</div>
            <div>PhoneNumber :{elem.PhoneNumber}</div>
            <div>Price :{elem.price}</div>
            <div>StartDate : {elem.fromdate}</div>
            <div>EndDate : {elem.todate}</div>
            <div>Description : ||{elem.description}||</div>
         
        </li>
      ));

    return (
            <div> 
               {/* <button onClick={getPost}>show</button> */}
    {/* <p> name: {Name}</p> */}
   {newArr}
    <button> RENT ONLINE </button>
            </div>
        )
    
}

export default Rent
