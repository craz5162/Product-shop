import React from 'react';
import logo from '../../images/austin-wade-AoYT0ArTTmg-unsplash 1 (1).png'
import './Body.css'

const Body = () => {
      return (
            <div className='body'>
                  <div className="left-site-body">
                        <h1>New Collection For Fall</h1>
                        <p>Discover all the new arrivals of ready-to-wear collection.</p>
                        <button>Add-To-Cart</button>
                  </div>
                  <div className="right-site-body">
                        <img src={logo} alt="" />
                  </div>
            </div>
      );
};

export default Body;