import React, { useState, useEffect } from 'react';
import blan from '../res/blank.jpg';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const PostItem = (props) => {
    const navigate=useNavigate();
    const elipses=(str,limit)=>{
        return str.length>limit?str.substr(0,limit)+'...':str;
    }
    const [image, setImage] = useState(blan);
    const [category,setCategory] = useState("");
    const [color, setColor] = useState("red");
  
    useEffect(() => {
      if (props.post.image) {
        setImage(props.post.image);
      }
      if (props.post.isAlumni === false && props.post.isClub === false) {
        setCategory("Student");
        setColor("red");
      }
      else if (props.post.isAlumni === true && props.post.isClub === false) {
        setCategory("Alumni");
        setColor("orange");
      }
      else if (props.post.isAlumni === false && props.post.isClub === true) {
        setCategory("Club");
        setColor("blue");
      }
    }, []);
  
    const formattedTime = moment(props.post.createdDate).fromNow();
  
    const handleview=()=>{
        navigate(`/post/${props.post._id}`);
    }
    return (
      <div className='post_container' onClick={handleview}> 
        <img src={image} alt="Post" />
        <div className='categories' style={{ backgroundColor: color }}>
          {category}
        </div>
        <div className='post_title'>{elipses(props.post.title, 20)}</div>
        <div className='post_detail'>{elipses(props.post.detail, 100)}</div>
        
        <div className="post_info">
          <div className="username">{props.post.username}</div>
          <div className="formatted_time">{formattedTime}</div>
        </div>
      
      </div>
    );
}
  
export default PostItem;
