import React from 'react';
import './HeroSection.css'; 

const HeroSection = () => {
    return (
        <div className="hero-section">
            
            <div className="hero-content">
                <h1>Bikers Planet</h1>
                <p>Your gateway to the world of bikes</p>
                <div className="search-bar">
                    <input type="text" placeholder="Search your bike hear" />
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
