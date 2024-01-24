import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.date.dt * 1000);
    let day = date.getDay();

    return day;
  }

  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={20} />
      <div className="Forecast-temperature">
        <span className="Forecast-max-temp">{maxTemperature()}</span>
        <span className="Forecast-min-temp">{minTemperature()}</span>
      </div>
    </div>
  );
}