import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handelResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
  }
  let apiKey = "48477574ab33f03aeefc4b00219c6195";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handelResponse);
  return <h2>Hello from Weather1</h2>;
}
