import React from 'react';
import  './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <nav>
           <div className='logo'>
                <img src={logo} alt="" />
           </div>
           <div>
            <a href="/home">Home</a>
            <a href="/products">Products</a>
            <a href="/order">Orders</a>
            <a href="/about">About</a>
           </div>
        </nav>
    );
};

export default Header;