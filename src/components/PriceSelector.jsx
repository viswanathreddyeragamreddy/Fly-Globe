import React, { useState } from 'react';
import './PriceSelector.css';

const plansData = [
  { id: 1, price: 552.32 },
  { id: 2, price: 552.32 },
  { id: 3, price: 552.32 }
];

const PriceSelector = () => {
  const [recommendedId, setRecommendedId] = useState(1);
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const matchedPlan = plansData.find(plan =>
      plan.price.toString().includes(query)
    );
    if (matchedPlan) {
      setRecommendedId(matchedPlan.id);
    } else {
      setRecommendedId(null);
    }
  };

  return (
    <div>
      <form className="search-container" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search price..."
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      <div className="price-container">
        {plansData.map(plan => (
          <div
            key={plan.id}
            className={`plan-box ${plan.id === recommendedId ? 'recommended' : ''}`}
          >
            {plan.id === recommendedId && (
              <div className="recommended-label">Recommended</div>
            )}
            <div>£{plan.price.toFixed(2)}*</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceSelector;
