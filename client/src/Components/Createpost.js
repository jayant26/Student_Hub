import React, { useState,useEffect } from 'react'
import NavBar from './NavBar'
import blan from '../res/blank.jpg'
import { useLocation, useNavigate } from 'react-router-dom'
import axios  from 'axios'
import Axios from "axios";
const initial_post={
  title:'',
  detail:'',
  image:'',
  username:'',
  isAlumni:'',
  isClub:'',
  createDate:new Date()
}
const Createpost = () => {
  const navigate=useNavigate();
  const location =useLocation();
  const user_id=location.state.user_id;
  const [post,setpost]=useState(initial_post);
  const [file,setfile]=useState('');
  const [image,setimage]=useState(blan);
  console.log(user_id);
  useEffect(()=>{
    axios.get(`http://localhost:3001/user/${user_id}`)
    .then((response)=>{
      console.log(response.data);
      post.username=response.data.username;
      post.isAlumni=response.data.isalumni;
      post.isClub=response.data.isclub;
    })
  },[])

  useEffect(() => {
    const getimage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        try {
          const response = await axios.post("http://localhost:3001/file/upload", data, {
            headers: {
              'Content-Type': 'multipart/form-data' // Set the Content-Type header in the request configuration
            }
          });
          setimage(response.data.imageurl);
          setpost({ ...post, image: response.data.imageurl });
        } catch (error) {
          console.error(error);
        }
      }
    };
    getimage();
  }, [file]);
  
  const handlechange=(e)=>{
    setpost({...post,[e.target.name]:e.target.value})
  }
  const token=sessionStorage.getItem('accesstoken');
  const config={
    headers:{
      'Authorization':token
    }
  }
  const handlepost=()=>{
    console.log(post);
    Axios.post('http://localhost:3001/post/create',post,config).then((response)=>{
      navigate('/');
    })
  }


  return (
    <>
      <NavBar />
      <div style={{ margin: "5px 100px" }}>

        <img src={image} alt='Click on the + icon to insert a image' style={{ width: "100%", height: "50vh", objectFit: "cover" }} />
        <div style={{ display: "flex" }} >
          <label htmlFor='post_image'>
            <span class="material-symbols-outlined" style={{ color: "black" }}>
              add
            </span>
          </label>
          <input type='file' id="post_image" style={{ display: "none" }} onChange={(e)=>setfile(e.target.files[0])} />
          <input type='text' placeholder='Title' style={{ flex: 1, fontSize: "25px", outline: "none", border: "none"}} name="title" onChange={(e)=>{handlechange(e)}} />
          <button className='create_button' onClick={handlepost}>Post</button>
        </div>
        <textarea className='create_detail' placeholder='Write what you want to share...' rows={5} name="detail" onChange={(e)=>{handlechange(e)}}></textarea>
      </div>
    </>
  )
}

export default Createpost