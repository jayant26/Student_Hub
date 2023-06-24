import React, { useEffect, useState } from 'react';
import dp from '../res/dp.png';
import Axios from 'axios';
import CommentItem from './CommentItem';

const initialComment = {
  name: '',
  postid: '',
  comments: '',
  date: new Date(),
};

const Comment = (post) => {
  const [comments, setComments] = useState([]);
  const [update, setUpdate] = useState(false);
  const [comment, setComment] = useState(initialComment);

  useEffect(() => {
    Axios.get(`http://localhost:3001/comment/getall/${post.post._id}`)
      .then((result) => {
        setComments(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [post.post, update]);

  const handleChange = (e) => {
    setComment({
      ...comment,
      name: sessionStorage.getItem('username'),
      postid: post.post._id,
      comments: e.target.value,
    });
  };

  const handleComment = () => {
    if (comment.comments.trim() !== '') {
      Axios.post('http://localhost:3001/comment/add', comment)
        .then((response) => {
          if (response.data.message) {
            setComment(initialComment);
            setUpdate((prevUpdate) => !prevUpdate);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <div style={{ marginTop: '50px', display: 'flex' }}>
        <img src={dp} className="comment_dp" alt="User Avatar" />
        <textarea
          rows={5}
          placeholder="Write your comment"
          className="comment_detail"
          value={comment.comments}
          onChange={handleChange}
        />
        <span className="material-symbols-outlined" onClick={handleComment}>
          send
        </span>
      </div>
      <div>
        {comments &&
          comments.length > 0 &&
          comments.map((comment) => (
            <CommentItem comment={comment} key={comment._id} setupdate={setUpdate}/>
          ))}
      </div>
    </div>
  );
};

export default Comment;
