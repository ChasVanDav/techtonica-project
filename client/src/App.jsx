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
    <div id={"weather"}>
      <img src="./unicorn.jpg" alt="image of unicorn with rainbow hair" />
      <h1>Unicorn Weather</h1>  
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
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`An icon image of ${weather.weather[0].description}`} />
          <h2>City: {weather.name}</h2>
          <h2>Temperature: {weather.main.temp}°F</h2>
          <h2>Condition: {weather.weather[0].description}</h2>
          <h2>Humidity: {weather.main.humidity}%</h2>
          <h2>Wind Speed: {weather.wind.speed}</h2>

        </div>
      )}
    </div>
  );
}

export default App;