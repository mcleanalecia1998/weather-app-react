import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsius() {
    return (props.fahrenheit - 32) / 1.8;
  }

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            ⁰C
          </a>{" "}
          | ⁰F{" "}
        </span>{" "}
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(celsius())}</span>
        <span className="unit">
          ⁰C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            ⁰F
          </a>{" "}
        </span>{" "}
      </div>
    );
  }
}
