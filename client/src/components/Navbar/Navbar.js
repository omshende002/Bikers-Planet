import React from 'react';
import Dropdown from '../Dropdown/Dropdown.js';
import './Navbar.css'; 
import logo from './logo.png'; // Import the logo image

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
             <img src={logo} alt="logo" />
            </div>
            <ul className="navbar-links">
                <li><a href="#">Home</a></li>
                <li><a href="#"></a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Reviews</a></li>
                <li><a href="#">More</a></li>
                <li><Dropdown title="More" items={['Bikes', 'Scooters']} /></li>
            </ul>
        </nav>
    );
}

export default Navbar;
