import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCityForm({ onAddCity }) {
  const navigate = useNavigate();
  const [newCity, setNewCity] = useState({
    id: Date.now(), // unique ID will be generated
    name: '',
    country: '',
    population: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewCity(prevCity => ({ ...prevCity, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onAddCity(newCity);
    navigate('/'); // Navigate to Cities List
  };

  return (
    <div className="add-city">
      <h2>Add City</h2>
      <div className="rounded-box">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={newCity.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Country:</label>
            <input
              type="text"
              name="country"
              value={newCity.country}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Population:</label>
            <input
              type="text"
              name="population"
              value={newCity.population}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <button type="submit">Add City</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCityForm;