import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='header-container'>
            <div className='header'>
                <div className='header-logo'>
                    Xpnser<i class="fa-regular fa-credit-card"></i>
                </div>
                <div className='header-button'>
                   <a href=''>
                  <i class="devicon-github-original"></i>Star
                  </a> 
                </div>

            </div>
            
        </div>
    );
};

export default Header;