import React from 'react'
import moment from 'moment';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
const CommentItem = ({comment,setupdate}) => {
    const navigate=useNavigate();
    console.log(comment.comments);
    const formattedTime = moment(comment.date).fromNow();
    const handledeletecomment=()=>{
      Axios.delete(`http://localhost:3001/comment/delete/${comment._id}`).then(response=>{
        setupdate(prevState=>!prevState);
    })
    }
  return (
    <div style={{marginTop:"30px",backgroundColor:"#F5F5F5",padding:"10px"}}>
        <div style={{display:"flex",marginBottom:"5px"}}>
          <div style={{fontWeight:600,fontSize:"18px",marginRight:"10px"}}>{comment.name}</div>
          <div style={{fontSize:"14px",color:"#878787"}}>{formattedTime}</div>
          {comment.name===sessionStorage.getItem('username')&&
          <>
           <span class="material-symbols-outlined" style={{ color: "black", marginLeft:"auto",marginRight:"5px",fontSize:"25px"}} onClick={handledeletecomment} >
            delete
          </span>
          </>}
        </div>
        <div>
            <div>
                {comment.comments}
            </div>
        </div>
    </div>
  )
}

export default CommentItem