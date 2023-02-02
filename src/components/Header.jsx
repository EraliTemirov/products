import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='fon'>
      <div className="container header">
        <div className="home">
          <Link to="/" className="home-link">
            Home
          </Link>
        </div>
        <img src="korzinka.png" alt="logo" className='logo' />
        <div className="about">
          <Link to="/about" className="link-home-green">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header
