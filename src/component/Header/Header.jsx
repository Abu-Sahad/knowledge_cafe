import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header-area'>
            <h2>Knowledge Cafe</h2>
            <div className='nav-option'>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/blog">Blog</a>
                <a href="/LogIn">LogIn</a>
            </div>
        </div>
    );
};

export default Header;