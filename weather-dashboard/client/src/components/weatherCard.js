import React from 'react';

function WeatherCard({ data }) {
  if (!data) return null;

  const { main, weather, wind, name, sys, dt } = data;
  const { temp, humidity, pressure } = main;
  const { description, icon } = weather[0];
  const { speed } = wind;
  const { country, sunrise, sunset } = sys;

  // Convert the UNIX timestamp to readable format
  const weatherDate = new Date(dt * 1000).toLocaleString();
  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

  return (
    <div className="weather-card">
      <h2>{name}, {country}</h2>
      <p>{description.charAt(0).toUpperCase() + description.slice(1)}</p>
      
      {/* Display weather icon */}
      <img 
        src={`https://openweathermap.org/img/wn/${icon}.png`} 
        alt={description} 
        className="weather-icon" 
      />
      
      {/* Current temperature and details */}
      <p>🌡 Temperature: {temp}°C</p>
      <p>💧 Humidity: {humidity}%</p>
      <p>💨 Wind Speed: {speed} m/s</p>
      <p>🌀 Pressure: {pressure} hPa</p>

      {/* Sunrise and Sunset */}
      <p>🌅 Sunrise: {sunriseTime}</p>
      <p>🌇 Sunset: {sunsetTime}</p>

      {/* General Weather Info */}
      <div className="general-info">
        <h3>Tips for {name}:</h3>
        <ul>
          <li>Wear light clothes in the summer.</li>
          <li>Carry an umbrella during the rainy season.</li>
          <li>Keep a jacket handy in the cooler months.</li>
        </ul>
      </div>

      {/* Current time in city */}
      <p>📅 Current time: {weatherDate}</p>
    </div>
  );
}

export default WeatherCard;
