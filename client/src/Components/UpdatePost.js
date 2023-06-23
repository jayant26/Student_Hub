import React, { useState,useEffect } from 'react'
import NavBar from './NavBar'
import blan from '../res/blank.jpg'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import axios  from 'axios'
import Axios from "axios";
const initial_post={
  title:'',
  detail:'',
  image:'',
  username:'',
  isAlumni:'',
  isClub:'',
  createdDate:new Date()
}
const UpdatePost = () => {
  const navigate=useNavigate();
  // const location =useLocation();
  const id=useParams();
  console.log(id.id);
  const user_id=sessionStorage.getItem('_id');
  const [post,setpost]=useState(initial_post);
  const [file,setfile]=useState('');
  const [image,setimage]=useState(blan);
//   console.log(user_id);
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
    axios.get(`http://localhost:3001/post/${id.id}`).then((response) => {
        if (response.data.image) {
            setimage(response.data.image);
        }
        setpost(response.data);
    });
}, []);



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
    Axios.patch(`http://localhost:3001/post/update/${id.id}`,post,config).then((response)=>{
      navigate(`/post/${id.id}`);
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
          <input type='text' placeholder='Title' value={post.title} style={{ flex: 1, fontSize: "25px", outline: "none", border: "none"}} name="title" onChange={(e)=>{handlechange(e)}} />
          <button className='create_button' onClick={handlepost}>Update</button>
        </div>
        <textarea className='create_detail' value={post.detail} placeholder='Write what you want to share...' rows={5} name="detail" onChange={(e)=>{handlechange(e)}}></textarea>
      </div>
    </>
  )
}

export default UpdatePost