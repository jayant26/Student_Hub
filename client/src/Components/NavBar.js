import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../res/logo.jpg';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate('/login');
  };

  const handleCreate = () => {
    navigate('/create');
  };

  const handleHome = () => {
    navigate('/');
  };

  const [isCreate, setisCreate] = useState(true);

  useEffect(() => {
    // Check if the current location matches the '/create' route
    if (location.pathname === '/create') {
      // Hide the 'add_circle' icon
      setisCreate(false);
    } else {
      // Show the 'add_circle' icon
      setisCreate(true);
    }
  }, [location.pathname]);

  return (
    <div className='navBar_container'>
      <div className='item1'>
        <img src={logo} alt='logo image' />
        <h1 className='title'>Student Hub</h1>
      </div>
      <div className='item2'>
        <span className='material-symbols-outlined' onClick={handleHome}>
          home
        </span>
        {isCreate && (
          <span className='material-symbols-outlined' onClick={handleCreate}>
            add_circle
          </span>
        )}
        <span className='material-symbols-outlined'>account_circle</span>
        <div onClick={handleLogout}>Logout</div>
      </div>
    </div>
  );
};

export default NavBar;
