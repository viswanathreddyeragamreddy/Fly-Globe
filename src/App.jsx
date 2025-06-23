import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DestinationGrid from './components/DestinationGrid';
import Footer from './components/Footer';
import ModifySearchBar from './components/ModifySearchBar';
import PriceSelector from './components/PriceSelector'; 
import FlightCards from './components/FlightCards';
import FlightDetails from './components/FlightDetails';

function App() {
  const [showDestinations, setShowDestinations] = useState(false);
  const [searchParams, setSearchParams] = useState(null);

  const handleDiscoverClick = () => {
    setShowDestinations(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const handleSearchUpdate = (params) => {
    console.log('🔍 Updated search params:', params);
    setSearchParams(params);
    setShowDestinations(true);
  };

  return (
    <div>
      <Navbar />
      <Home onDiscoverClick={handleDiscoverClick} onSearch={handleSearchUpdate} />
      {showDestinations && (
        <>
          <DestinationGrid />
          <ModifySearchBar onSearch={handleSearchUpdate} />
          <PriceSelector />
          <FlightCards searchParams={searchParams} />
          <FlightDetails />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
