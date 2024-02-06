import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    return `${Math.round(props.data.temp.max)}°`;
  }
  function minTemperature() {
    return `${Math.round(props.data.temp.min)}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={50} />
      <div className="Forecast-temperature">
        <span className="Forecast-max-temp">{maxTemperature()}</span>
        <span className="Forecast-min-temp">{minTemperature()}</span>
      </div>
    </div>
  );
}
