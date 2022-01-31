import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [temperature, setTemperature] = useState("null");
  const [ready, setReady] = useState(false);
  function handelResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>New York</h1>
        <ul>
          <li>Wednesday 07:00</li>
          <li>Mostly Cloudy</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/snow_s_rain.png"
                alt="mostly cloudy"
                className="float-left"
              />
              <div className="temp">
                <span className="temperature">{temperature}</span>
                <span className="unit">°C | °F</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 72%</li>
              <li>Wind: 13km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "48477574ab33f03aeefc4b00219c6195";
    let city = "london";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handelResponse);
    return "Loading...";
  }
}
