import React from 'react';
import './LightSection.css';

const LightSection = ({ children }) => {
  return (
    <section className="light-section">
      {children}
    </section>
  );
};

export default LightSection;
