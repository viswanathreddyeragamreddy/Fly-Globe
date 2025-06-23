import React, { useState } from 'react';
import './FlightForm.css';

const FlightForm = () => {
  const [formData, setFormData] = useState({
    tripType: 'round',
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    passengers: '1 Adult, 1 Child',
    seatClass: 'Economy',
    airline: 'All Airlines',
    directOnly: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSearch = () => {
    console.log('Search Params:', formData);
    alert('Searching flights...\n' + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="flight-form-container">
      <div className="trip-toggle">
        <button
          className={formData.tripType === 'round' ? 'active' : ''}
          onClick={() => setFormData({ ...formData, tripType: 'round' })}
        >
          Round trip
        </button>
        <button
          className={formData.tripType === 'oneway' ? 'active' : ''}
          onClick={() => setFormData({ ...formData, tripType: 'oneway' })}
        >
          One way
        </button>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>From</label>
          <input name="from" value={formData.from} onChange={handleChange} placeholder="Delhi (DEL)" />
        </div>
        <div className="form-group">
          <label>To</label>
          <input name="to" value={formData.to} onChange={handleChange} placeholder="London (LHR)" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Departure Date</label>
          <input type="date" name="departureDate" value={formData.departureDate} onChange={handleChange} />
        </div>

        {formData.tripType === 'round' && (
          <div className="form-group">
            <label>Return Date</label>
            <input type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} />
          </div>
        )}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Passengers</label>
          <input name="passengers" value={formData.passengers} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Seat Class</label>
          <select name="seatClass" value={formData.seatClass} onChange={handleChange}>
            <option>Economy</option>
            <option>Business</option>
            <option>First</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group airline">
          <label>Select Airlines</label>
          <input name="airline" value={formData.airline} onChange={handleChange} />
        </div>
        <div className="form-group checkbox">
          <input type="checkbox" name="directOnly" checked={formData.directOnly} onChange={handleChange} />
          <label>Direct Flights Only</label>
        </div>
      </div>

      <button className="search-btn" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default FlightForm;
