import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./Forecast.css";

export default function Forecast() {
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
