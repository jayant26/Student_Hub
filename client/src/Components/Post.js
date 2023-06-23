import axios from 'axios';
import React ,{useState,useEffect}from 'react'
import PostItem from './PostItem';

const Post = (props) => {
const [posts,setpost]=useState([]);
console.log(props.category);

  useEffect(()=>{
      
        axios.get('http://localhost:3001/post/get',{params:{category:props.category,username:sessionStorage.getItem('username')}}).then((response)=>{
          console.log(response.data);
          setpost(response.data);
        })
      
      
  },[props.category])
console.log(posts.length);
const category=props.category;
  return (
    <>
      
     {posts?.length ? <div style={{display:"flex",flexWrap:"wrap" ,justifyContent:"space-evenly"}}>{ posts.map(post => (
               
                   <PostItem post={post} category={category}/> 
                   
                ))} </div>:<div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"90%"}}><div style={{fontSize:"48px" ,color:"#878787",fontFamily:"Roboto"}}>No post yet</div></div>}
    

</>

  )
}

export default Post



// <div class="eleven">
//     {console.log(posts.length)}
//   <h1>{props.title}</h1>
 
// </div>