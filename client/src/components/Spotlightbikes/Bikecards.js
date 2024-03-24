import React from 'react'
 import "./Bikecards.css";

 const Card = ({ name, description, imageUrl, price, rating }) => {
    return (
      <div className="hotel-card">
        <img src={imageUrl} alt="hotel" className="hotel-image" />
        <div className="hotel-details">
          <h3 className="hotel-name">{name}</h3>
          <p className="hotel-description">{description}</p>
          <div className="hotel-info">
           <p className="hotel-price"> ₹{price} </p>
           <p className="hotel-rating">{rating}</p>
         </div>
        </div>
      </div>
    );
  };

export default Card;
