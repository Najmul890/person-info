import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Header</h1>
            <nav>
            <a href="/home">Home</a>
            <a href="/news">News</a>
            <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;