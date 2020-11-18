import React, { Component, useState ,useEffect} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';

    const Mein = () => { 
      const [info, setInfo] = useState([]);
      const [infoPosts, setInfoPosts] = useState([]);
      const [userPic, setUserPic] = useState("");
      const [postPic, setPostPic] = useState("");
      const [address, setAddress] = useState("");
      const [Fullname, setFullname] = useState("");
      const [dob, doBset] = useState("");
      const [email, setEmail] = useState("");
      const [loading, setLoading] = useState(false);
      const [id, setId] = useState("");
      const [updating, setUpdating] = useState(false);
      const [arr,setArr] =useState([
        {Name:"user2",Title:"post1",Description:" Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
      ,Location:"jordan",StartDate:"2/2/2009",EndDate:"2/2/2009",PhoneNumber:"0793872819"},
      {Name:"user2",Title:"post1",Description:" Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
      ,Location:"jordan",StartDate:"2/2/2009",EndDate:"2/2/20091",PhoneNumber:"0793872819"}])
      const [Name, setName] = useState("");
      const [Title, setTitle] = useState("");
      const [Description, setDescription] = useState("");
      const [Location, setLocation] = useState("");
      const [StartDate, setStartDate] = useState("");
      const [EndDate, setEndDate] = useState("");
      const [postdate, setPostdate] = useState("");
      const [PhoneNumber, setPhoneNumber] = useState("");
      const [Category, setCategory] = useState("");
      const [Price, setPrice] = useState("");
      const [postImage, setPostImage] = useState("");
      

      const getUser =async (infoArgumnt) => {
            console.log(infoArgumnt)
            axios
              .get(`http://localhost:5000/user/${infoArgumnt}`)
              .then(async (response) => {
                console.log("response",response)
                // alert(response)
                setLoading(true)
                 setInfo(response.data)
                if(info.length===[]){
                  setLoading(false)
                  alert("no user found")
                }
                setAddress(response.data[0].address)
                setFullname(response.data[0].Fullname)
                doBset(response.data[0].dob)
                setEmail(response.data[0].email)
                setUserPic(response.data[0].img_url)
                
                setLoading(false)

              })
              .catch((err) => {
                console.log('RESULT: ', err);
              });
          };
          const getPosts =async (infoArgumnt) => {
            console.log(infoArgumnt)
            axios
              .get(`http://localhost:5000/posts`)
              .then(async (response) => {
                console.log("response",response)
                // alert(response)
                setLoading(true)
                 setInfoPosts(response.data)
                //  setLocation(response.data)
                //  setTitle(response.data)
                //  setPhoneNumber(response.data)
                //  setPostdate(response.data)
                //  setStartDate(response.data)
                //  setEndDate(response.data)
                //  setCategory(response.data)
                //  setDescription(response.data)
                if(infoPosts.length===[]){
                  setLoading(false)
                  alert("no posts found")
                }
                
                setLoading(false)

              })
              .catch((err) => {
                console.log('RESULT: ', err);
              });
          };
          const deletePosts =async (infoArgumnt) => {
            console.log(infoArgumnt)
            axios
              .delete(`http://localhost:5000/delete/${infoArgumnt}`)
              .then(async (response) => {
                console.log("response",response)
                alert("one post deleted")
                getPosts()
              })
              .catch((err) => {
                console.log('RESULT: ', err);
              });
          };
        const UTitle = (e)=>{
          setTitle(e.target.value)
        }
        const uNum = (e)=>{
          setPhoneNumber(e.target.value)
        }
        const uStart = (e)=>{
          setStartDate(e.target.value)
        }
        const uEnd = (e)=>{
          setEndDate(e.target.value)
        }
        const uLocation = (e)=>{
          setLocation(e.target.value)
        }
        const uCategory = (e)=>{
          setCategory(e.target.value)
        }
        const u_img_url = (e)=>{
          setPostImage(e.target.value)
        }
        const uName = (e)=>{
          setName(e.target.value)
        }
        const uPrice = (e)=>{
          setPrice(e.target.value)
        }
        const updatePosts =async (infoArgumnt) => {
          console.log(infoArgumnt)
          const arrData = {name:Name,price:Price,category:Category,location:Location,from_date:StartDate,
            to_date:EndDate,img_url:postImage,post_id:infoArgumnt};          
            axios
            .put(`http://localhost:5000/posts/update`,arrData)
            .then(async (response) => {
              console.log("response",response)
              alert(response)
              getPosts()
            }) 
            .catch((err) => {
              console.log('RESULT: ', err);
            });
        };
      const userId = (e)=>{
        setId(e.target.value)
      }
      useEffect(()=>getPosts())
        const newArr = infoPosts.map((elem,index)=><li  num={index+1} key={index}>
          <div className="postTitle" >Post {index+1} || {elem.name} || posted at : {elem.postdate}</div>
          <div>Title : {elem.title}</div> 
          {/* <button onClick={()=>deletePosts(elem.post_id)} >D</button> */ }
           {/* <button onClick={()=>{ setUpdating(true)  */}
            {/* updatePosts(elem.post_id)}}>U</button>   </div> */}
          <div>Category : {elem.category}</div>
          <div> <img src={elem.img_url} alt="post image" className="postPic" ></img>pic</div>
          <div>Location : {elem.location}</div>
          <div>PhoneNumber :{elem.PhoneNumber}</div>
          <div>Price :{elem.price}</div>
          <div>StartDate : {elem.fromdate}</div>
          <div>EndDate : {elem.todate}</div>
          <div>Description : ||{elem.description}||</div>
          </li> )
    
      return (
     <div className="profile">
      <ul className='pPostsList'>
      {/* <button onClick={()=>getPosts()} >get posts info</button>  */}
{newArr} 
</ul> 
  </div>
    )
}

export default Mein