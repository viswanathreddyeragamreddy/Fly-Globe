import React from 'react';
import './FlightCard.css';

const FlightCard = ({ airline, from, to, time, duration, price }) => {
  return (
    <div className="flight-card">
      <div className="flight-info">
        <h3>{airline}</h3>
        <p>{from} → {to}</p>
        <p>{time} | {duration}</p>
      </div>
      <div className="flight-price">
        <h4>₹{price}</h4>
        <button>Book Now</button>
      </div>
    </div>
  );
};

export default FlightCard;
