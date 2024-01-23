import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  console.log(props);

  let apiKey = `8d9838178b5b401f1b4e7cb5af18e210`;
  let latitude = props.coordinate.lon;
  let longitude = props.coordinate.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Wed</div>
          <WeatherIcon code="01d" size={52} />
          <div className="Forecast-temperature">
            <span className="Forecast-max-temp">29° </span>
            <span className="Forecast-min-temp">9° </span>
          </div>
        </div>
      </div>
    </div>
  );
}
