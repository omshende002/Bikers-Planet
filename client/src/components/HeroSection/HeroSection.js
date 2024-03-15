
import React from 'react';
import './HeroSection.css'; // Assuming you have a CSS file for styling

const HeroSection = () => {
    return (
        <div className="hero-section">
            
            <div className="hero-content">
                <h1>Bikers Planet</h1>
                <p>Discover the thrill of the open road</p>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
