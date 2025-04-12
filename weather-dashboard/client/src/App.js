import React, { useState } from 'react';
import SearchBar from './components/searchBar';
import WeatherCard from './components/weatherCard';
import './index.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const res = await fetch(`http://localhost:5000/weather?city=${city}`);
      const data = await res.json();
      setWeatherData(data);
    } catch (err) {
      console.error('Error fetching weather:', err);
    }
  };

  return (
    <div className="app">
      <h1>🌤 Weather Dashboard</h1>
      <SearchBar onSearch={fetchWeather} />
      <WeatherCard data={weatherData} />
    </div>
  );
}

export default App;
