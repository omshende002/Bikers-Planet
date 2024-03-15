import React, { useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div ><img src="" alt='logo' className="navbar-logo"/>Bikers Planet</div>
            <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <a href="#">Home</a>
                <a href="#">New Bikes</a>
                <a href="#">Used Bikes</a>
                <a href="#">Compare</a>
                <a href="#">News</a>
                <a href="#">About</a>
            </div>
            <div className="navbar-login">
                <button>Login</button>
            </div>
            <div className="navbar-toggle" onClick={toggleNavbar}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navbar;