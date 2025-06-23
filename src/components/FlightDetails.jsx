import React from 'react';
import './FlightDetails.css';

const airlineLogoURL = 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Air_India_Logo.svg/1200px-Air_India_Logo.svg.png';

const FlightDetails = () => {
  return (
    <div className="flight-details-container">
      <div className="header">
        <h2>Flight Details</h2>
        <button className="close-btn">X</button>
      </div>

      {/* Departure */}
      <div className="section">
        <div className="section-title">Departure</div>
        <div className="section-subtitle">23 MARCH 2025 TUESDAY | BUSINESS</div>
        <div className="route-title">Delhi To London</div>

        <div className="segment">
          <div className="time">14:00<br/><span>23 March</span></div>
          <div className="airport">
            <strong>DEL</strong><br/>
            Terminal 4, Indira Gandhi Intl Airport, New Delhi
          </div>
          <div className="duration">7H</div>
          <img src={airlineLogoURL} alt="Air India" className="airline-logo" />
          <div className="aircraft">Boeing AI-2808</div>
        </div>

        <div className="segment">
          <div className="time">22:00<br/><span>23 March</span></div>
          <div className="airport">
            <strong>CDG</strong><br/>
            Terminal 2, Paris Charles de Gaulle Airport, France
          </div>
        </div>

        <div className="layover">Oh 55m Layover in France</div>

        <div className="segment">
          <div className="time">22:55<br/><span>23 March</span></div>
          <div className="airport">
            <strong>CDG</strong><br/>
            Terminal 2, Paris Charles de Gaulle Airport, France
          </div>
          <div className="duration">4H</div>
          <img src={airlineLogoURL} alt="Air India" className="airline-logo" />
          <div className="aircraft">Boeing AI-2808</div>
        </div>

        <div className="segment">
          <div className="time">3:55<br/><span>24 March</span></div>
          <div className="airport">
            <strong>LHR</strong><br/>
            Terminal 2, London Heathrow Airport, London
          </div>
        </div>
      </div>

      {/* Return */}
      <div className="section">
        <div className="section-title">RETURN</div>
        <div className="section-subtitle">22 APRIL 2025 TUESDAY | BUSINESS</div>
        <div className="route-title">London To Delhi</div>

        <div className="segment">
          <div className="time">14:00<br/><span>22 April</span></div>
          <div className="airport">
            <strong>LHR</strong><br/>
            Terminal 2, London Heathrow Airport, London
          </div>
          <div className="duration">7H</div>
          <img src={airlineLogoURL} alt="Air India" className="airline-logo" />
          <div className="aircraft">Boeing AI-2808</div>
        </div>

        <div className="segment">
          <div className="time">22:00<br/><span>22 April</span></div>
          <div className="airport">
            <strong>DEL</strong><br/>
            Terminal 2, Indira Gandhi Intl Airport, New Delhi
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
