import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CitiesList from './components/CitiesList';
import CityDetails from './components/CityDetails';
import AddCity from './components/AddCity';
import './App.css';

function App() {
  const [cities, setCities] = useState([]);
  const handleAddCity = newCity => {
    setCities(prevCities => [...prevCities, newCity]);
  };
  return (
    <Router>
      <h1 className="title">Cities Application</h1>
      <div className="container">
        
        <nav>
          <ul className="horizontal-nav">
            <li>
              <Link to="/">Cities List</Link>
            </li>
            <li>
              <Link to="/add-city">Add City</Link>
            </li>
          </ul>
        </nav>
        {/* Routes */}
        <Routes>
          <Route path="/add-city" element={<AddCity onAddCity={handleAddCity} />} />
          <Route path="/cities/:cityId" element={<CityDetails cities={cities} />} />
          <Route path="/" element={<CitiesList cities={cities} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;