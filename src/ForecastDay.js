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
      <div className="forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={45} />
      <div className="forecast-temperature">
        <span className="forecast-max-temp">{maxTemperature()}</span>
        <span className="forecast-min-temp">{minTemperature()}</span>
      </div>
    </div>
  );
}
