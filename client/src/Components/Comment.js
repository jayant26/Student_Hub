import React, { useEffect, useState } from 'react'
import dp from '../res/dp.png'
import  Axios  from "axios";
import axios from 'axios';
import CommentItem from './CommentItem';
const initial={
    username:"",
    postid:"",
    comments:"",
    date: new Date()
}
const Comment = (post) => {
    // console.log(post.post._id);
    const [comments,setcomments]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:3001/comment/getall/${post.post._id}`).then(result=>{
            setcomments(result.data);
        })
    },[post.post])
    const [comment,setcomment]=useState(initial);
     console.log(comments.length)
    const handlechange=(e)=>{
        setcomment({
            ...comment,
            username:sessionStorage.getItem('username'),
            postid:post.post._id,
            comments:e.target.value
        })
    }
    const handleComment = () => {
        if (comment.comments.trim() !== '') {
          Axios.post('http://localhost:3001/comment/add', comment).then((response) => {
            if (response.data.message) {
              setcomment(initial);
            }
          });
        }
      };
  return (
    <div>
        <div style={{marginTop:"50px",display:"flex"}}>
            <img src={dp} className='comment_dp'/>
            <textarea rows={5} placeholder='Write your comment' className='comment_detail' value={comment.comments}onChange={(e)=>{handlechange(e)}}/>
            <span class="material-symbols-outlined" onClick={handleComment}>
send
</span>
        </div>
        <div>
            {
                
                comments&&comments.length>0&&comments.map(comment=>{
                    <CommentItem comment={comment}/>
                })
            }
        </div>
    </div>
  )
}

export default Comment