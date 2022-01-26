import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [message, setMessage] = useState("");

  function showDetail(response) {
    setMessage(
      <ul>
        <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {response.data.wind.speed}km/h</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt={response.data.weather[0].description}
          />
        </li>
      </ul>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=48477574ab33f03aeefc4b00219c6195&units=metric`;
      axios.get(url).then(showDetail);
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="container">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="enter a city" onChange={updateCity} />
        <input type="submit" value="search" />
      </form>
      <div>{message}</div>
      <small>
        <a
          href="https://github.com/fxing11/Vanilla-weather-app"
          target="_blank"
        >
          Open source code
        </a>
        by Fei Xing
      </small>
    </div>
  );
}
