import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import Axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handelResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  console.log(props);
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">{forecast[0].dt}</div>
            <WeatherIcon code={forecast[0].weather[0].icon} size={36} />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">
                {forecast[0].temp.max}°
              </span>
              <span className="WeatherForecast-temperature-min">
                {forecast[0].temp.min}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "48477574ab33f03aeefc4b00219c6195";
    let longtitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`;

    Axios.get(apiUrl).then(handelResponse);
    return null;
  }
}
