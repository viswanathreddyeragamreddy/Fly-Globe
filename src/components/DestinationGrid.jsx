// src/components/DestinationGrid.jsx
import React, { useState } from 'react';
import './DestinationGrid.css';

const categories = [
  'All', 'Asian', 'European', 'Middle-East',
  'Beach Paradise', 'Nature Retreats', 'Romantic Escapes',
  'Cultural Immersion', 'African', 'American',
];

const destinations = [
  { title: 'ROME', country: 'Italy', image: '/images/rome1.jpg' },
  { title: 'ROME', country: 'Italy', image: '/images/thailand.jpg' },
  { title: 'ROME', country: 'Italy', image: '/images/mosque.jpg' },
  { title: 'ROME', country: 'Italy', image: '/images/statue.jpg' },
  { title: 'ROME', country: 'Italy', image: '/images/thailand2.jpg' },
  { title: 'ROME', country: 'Italy', image: '/images/mosque2.jpg' },
];

const DestinationGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="destination-section">
      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? 'active' : ''}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid">
        {destinations.map((dest, index) => (
          <div className="card" key={index}>
            <img src={dest.image} alt={dest.title} />
            <div className="card-info">
              <span className="title">{dest.title}</span>
              <span className="country">{dest.country}</span>
              <div className="price">fr <strong>$500*</strong></div>
              <div className="note">1000+ Destinations</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationGrid;
