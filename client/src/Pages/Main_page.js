import React from 'react'
import { useLocation } from 'react-router-dom'
import NavBar from '../Components/NavBar';
const Main_page = () => {
    const location=useLocation();
  return (
      <div>
        <NavBar/>
      </div>
  )
}

export default Main_page