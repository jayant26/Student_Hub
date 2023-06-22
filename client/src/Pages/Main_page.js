import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import NavBar from '../Components/NavBar';

import List from '../Components/List';
import Post from '../Components/Post';
const Main_page = () => {
    const location=useLocation();
    const [showMenu, setMenu] = useState({
      Allpost: true,
      Alumni: false,
      Club:false,
      Student: false,
      Mypost:false,
      StudentList: false,
      AlumniList: false,
      ClubList: false
  });
  const user_id=location.state._id;
  const handleClick = (field) => {
    const updatedMenu = Object.keys(showMenu).reduce((acc, item) => {
        acc[item] = item === field;
        return acc;
    }, {});

    setMenu(updatedMenu);
};

  return (
      <div>
        <NavBar user_id={user_id}/>
        <div className='mainPage_container'>
        <div className='mainPage_sidebar'>
                    
                    <h1 style={{fontFamily:"'Roboto', sans-serif"}}>Posts</h1>
                    <div className='item1' onClick={() => { handleClick('Allpost') }} style={{ backgroundColor: showMenu.Allpost ? "#005642" : "", color: showMenu.Allpost ? "white" : "" }}>
                        <span style={{ display: "inline-block" }}>All</span>
                    </div>
                    <div className='item1' onClick={() => { handleClick('Alumni') }} style={{ backgroundColor: showMenu.Alumni ? "#005642" : "", color: showMenu.Alumni? "white" : "" }}>
                        <span style={{ display: "inline-block" }}>Alumni</span>
                    </div>
                    <div className='item1' onClick={() => { handleClick('Club') }} style={{ backgroundColor: showMenu.Club ? "#005642" : "", color: showMenu.Club ? "white" : "" }}>
                        <span style={{ display: "inline-block" }}>Club</span>
                    </div>
                    <div className='item1' onClick={() => { handleClick('Student') }} style={{ backgroundColor: showMenu.Student ? "#005642" : "", color: showMenu.Student ? "white" : "" }}>
                        <span style={{ display: "inline-block" }}>Student</span>
                    </div>
                    <div className='item1' onClick={() => { handleClick('Mypost') }} style={{ backgroundColor: showMenu.Mypost? "#005642" : "", color: showMenu.Mypost ? "white" : "" }}>
                        <span style={{ display: "inline-block" }}>My Post</span>
                    </div>
                    <h1 style={{fontFamily:"'Roboto', sans-serif"}}>User List</h1>
                    <div className='item1' onClick={() => { handleClick('AlumniList') }} style={{ backgroundColor: showMenu.AlumniList ? "#005642" : "", color: showMenu.AlumniList ? "white" : "" }}>
                        <span style={{ display: "inline-block" }}>Alumni</span>
                    </div>
                    <div className='item1' onClick={() => { handleClick('ClubList') }} style={{ backgroundColor: showMenu.ClubList ? "#005642" : "", color: showMenu.ClubList ? "white" : "" }}>
                        <span style={{ display: "inline-block" }}>Club</span>
                    </div>
                    <div className='item1' onClick={() => { handleClick('StudentList') }} style={{ backgroundColor: showMenu.StudentList ? "#005642" : "", color: showMenu.StudentList ? "white" : "" }}>
                        <span style={{ display: "inline-block" }}>Student</span>
                    </div>
                </div>
          <div className='mainPage_content' style={{ width: "100%" }}>
                    {showMenu.Allpost && <Post  title={'All Post'}/>}
                    {showMenu.Alumni && <Post  title={'Alumni Post'}/>}
                    {showMenu.Club && <Post  title={'Club Post'}/>}
                    {showMenu.Student && <Post  title={'Student Post'}/>}
                    {showMenu.Mypost && <Post  title={'My Post'}/>}
                    {showMenu.AlumniList && <List  title={'Alumni List'}/>}
                    {showMenu.ClubList && <List  title={'Club List'}/>}
                    {showMenu.StudentList && <List  title={'Student List'}/>}
                </div>     
          </div>

      </div>
  )
}

export default Main_page