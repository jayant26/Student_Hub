import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from './NavBar';
import axios   from 'axios';
import Axios from "axios";
import blan from '../res/blank.jpg';
import Comment from './Comment';
const ViewPost = (props) => {
    const navigate=useNavigate();
    const id = useParams();
    const [image, setimage] = useState(blan);
    const [postdetail, setpostdetail] = useState(null);
    // console.log(postdetail.title);
    const user = sessionStorage.getItem('username');
    useEffect(() => {
        axios.get(`http://localhost:3001/post/${id.id}`).then((response) => {
            if (response.data.image) {
                setimage(response.data.image);
            }
            setpostdetail(response.data);
        });
    }, []);


    const handleedit=()=>{
        navigate(`/update/${id.id}`);
    }
    const handledelete=()=>{
        Axios.delete(`http://localhost:3001/post/${id.id}`).then(response=>{
            navigate('/');
        })
    }


    if (!postdetail) {
        // Render a loading spinner
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div className="spinner"></div>
            </div>
        );
    }


    return (
        <>
            <NavBar />
            <div style={{ margin: "5px 100px" }}>
                <img src={image} alt='Click on the + icon to insert an image' style={{ width: "100%", height: "50vh", objectFit: "cover" }} />
                <div style={{ float: "right" }} className='update_button'>
                    {
                        user === postdetail.username &&
                        <>
                            <span class="material-symbols-outlined" style={{ color: "blue", borderColor: "blue" }} onClick={handleedit}>
                                edit
                            </span>
                            <span class="material-symbols-outlined" style={{ color: "red", borderColor: "red" }} onClick={handledelete}>
                                delete
                            </span>
                        </>
                    }


                </div>
                <div className='vp_title'>{postdetail.title}</div>

                <div style={{display:"flex" ,color:'#878787',margin:"20px 0"}}>
                    <div style={{fontWeight:"600"}}>{postdetail.username}</div>
                    <div style={{marginLeft:"auto"}}>{new Date(postdetail.createdDate).toDateString()}</div>
                </div>
                <div>{postdetail.detail}</div>
                <Comment post={postdetail}/>
            </div>
        </>
    );
};

export default ViewPost;
