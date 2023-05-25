import React from 'react';
import './navbar.css';
import Searchbar from '../searchbar/Searchbar';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='leftSide'>
        <h1>Star Wars Universe</h1>
      </div>
      <div className='rightSide'>
        <Searchbar />
      </div>
    </div>
  );
};

export default Navbar;
