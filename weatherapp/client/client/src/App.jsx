import React, { useState } from 'react';
import './App.css';


function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSearch = () => {
  fetch(`http://localhost:3000?city=${encodeURI(city)}`)
      .then(response => response.json())
      .then(data => setWeather(data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city name" 
      />
      <button onClick={handleSearch}>Search</button>
      {weather && (
        <div>
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {weather.main.temp}°F</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;