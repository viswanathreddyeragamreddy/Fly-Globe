// ✅ FlightCards.jsx
import React from 'react';
import './FlightCards.css';

const flights = [
  { id: 1, tag: 'Cheapest Flight', tagColor: 'green', price: 552.32, best: true },
  { id: 2, tag: 'Best Deals', tagColor: 'red', price: 552.32, best: false },
  { id: 3, tag: 'Cheapest Flight', tagColor: 'green', price: 552.32, best: true },
  { id: 4, tag: 'Cheapest Flight', tagColor: 'green', price: 552.32, best: false }
];

const airlineLogoURL = 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Air_India_Logo.svg/1200px-Air_India_Logo.svg.png';
const bestBadgeURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Star_icon_stylized.svg/1024px-Star_icon_stylized.svg.png';

const FlightCards = () => {
  return (
    <div>
      {flights.map((flight) => (
        <div className="flight-card" key={flight.id}>
          <div className="flight-details">
            <div className="flight-header">Departure<br />23 MARCH 2025 TUESDAY | BUSINESS</div>
            <div className="flight-info">
              <div className="time-airport">
                <strong>DEL 14:00</strong>
                <div>Indira Gandhi International Airport, Delhi</div>
              </div>
              <div className="duration">
                <div>15h 30m</div>
                <div>2 stop(s) YYZ</div>
              </div>
              <div className="time-airport">
                <strong>LHR 14:00</strong>
                <div>London Heathrow Airport, London</div>
              </div>
              <div className="logo-container">
                <img src={airlineLogoURL} alt="Air India" className="airline-logo" />
                {flight.best && <img src={bestBadgeURL} alt="Best Badge" className="best-badge" />}
              </div>
            </div>
            <div className="flight-options">
              <span>FLIGHT DETAILS ▾</span>
              <span>BAGGAGE ▾</span>
              <span>REFUNDABLE</span>
            </div>
          </div>
          <div className="flight-price">
            <div className={`tag ${flight.tagColor}`}>{flight.tag}</div>
            <div className="price">£{flight.price.toFixed(2)}*</div>
            <div className="price-note">price per person<br/>(Incl. taxes and fees)</div>
            <button className="book-btn">BOOK NOW</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlightCards;
