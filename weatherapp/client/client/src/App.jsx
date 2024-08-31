import React, { useState } from 'react';
import './App.css';


function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const handleSearch = () => {
    //connected to backend with direct link below
  fetch(`http://localhost:3000?city=${encodeURI(city)}`)
      .then(response => response.json())
      .then(data => {
        if (data.cod === "404") {
          throw new Error(data.message)
        }

        setWeather(data)
        setErrorMessage()

      })
      .catch(error => {
        setErrorMessage(error.message)
        setWeather()
      });

  };
  const errorStyle={color:"red"}
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
      {errorMessage && (
        <div style={errorStyle}>
          Error: {errorMessage}
        </div>
      )}
      {weather && (
        <div>
          <h2>Weather in {weather.name}</h2>
          {/* math.round */}
          <p>Temperature: {weather.main.temp}°F</p>
          <p>Humidity: {weather.main.humidity}</p>
          {/* math.round */}
          <p>Wind Speed: {weather.wind.speed}</p>
          <p>Condition: {weather.weather[0].description}</p>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`An icon image of ${weather.weather[0].description}`} />
        </div>
      )}
    </div>
  );
}

export default App;