import React, { useState } from 'react';
import './ModifySearchBar.css';

const ModifySearchBar = ({ onSearch }) => {
  const [tripType, setTripType] = useState("Round Trip");
  const [from, setFrom] = useState("Delhi DEL");
  const [to, setTo] = useState("London LHR");
  const [departureDate, setDepartureDate] = useState("23 March 2025");
  const [returnDate, setReturnDate] = useState("28 March 2025");
  const [passengers, setPassengers] = useState("1 Adult");
  const [seatClass, setSeatClass] = useState("Business");

  const handleSearch = () => {
    onSearch({
      tripType,
      from,
      to,
      departureDate,
      returnDate,
      passengers,
      seatClass
    });
  };

  return (
    <div className="modify-search-bar">
      <div className="modify-item">{tripType} ▾</div>
      <div className="modify-item">
        <strong>From</strong><br />{from}
        <span className="swap-icon">⇄</span>
        <strong>To</strong><br />{to}
      </div>
      <div className="modify-item">
        <strong>Departure Date ▾</strong><br />{departureDate}
      </div>
      <div className="modify-item">
        <strong>Return Date ▾</strong><br />{returnDate}
      </div>
      <div className="modify-item">
        <strong>Passenger & Class ▾</strong><br />{passengers} {seatClass}
      </div>
      <button className="modify-button" onClick={handleSearch}>
        Modify Search
      </button>
    </div>
  );
};

export default ModifySearchBar;
