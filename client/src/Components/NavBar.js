import React, { useState } from 'react'
import logo from '../res/logo.jpg';

const NavBar = () => {
  
  return (
    <div className='navBar_container'>
     

        <div className='item1'>
            <img src={logo} alt='logo image'  />
            <h1 className='title'>Student Hub</h1>
        </div>
      
        <div className='item2'>
            <div>Student</div>
            <div>Alumni</div>
            <div>Club</div>
        </div>
    </div>
  )
}

export default NavBar