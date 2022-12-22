import React from 'react';
import './Nav.css'
import logo from '../../images/Logo.svg'

const Nav = () => {
      return (
            <div className='nav'>
                  <div className="left">
                        <img src={logo} alt="" />
                  </div>
                  <div className="right">
                        <a href="">Home</a>
                        <a href="">body</a>
                        <a href="">Shop</a>
                        <a href="">Contact</a>
                  </div>
            </div>
      );
};

export default Nav;