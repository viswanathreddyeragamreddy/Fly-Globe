// src/pages/Home.jsx
import React from 'react';
import FlightForm from '../components/FlightForm';
import './Home.css';

const Home = ({ onDiscoverClick, onSearch }) => {
  return (
    <div className="home-container">
      <div className="home-left">
        <h1>
          UNLOCK EFFORTLESS TRAVEL WITH <br />
          <span>UNBEATABLE FLIGHT DEALS!</span>
        </h1>
        <p>
          From Seamless Booking to Smooth Takeoff – We Take Care of Every Detail So You Can Enjoy the Journey!
        </p>
        <button className="discover-btn" onClick={onDiscoverClick}>DISCOVER NOW</button>
      </div>
      <div className="home-right">
        <FlightForm onSearch = {onSearch}  />
      </div>
    </div>
  );
};

export default Home;
