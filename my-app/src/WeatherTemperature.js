import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function covertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function covertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          ⁰C |{" "}
          <a href="/" onClick={covertToFahrenheit}>
            ⁰F
          </a>{" "}
        </span>{" "}
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={covertToCelsius}>
            ⁰C{" "}
          </a>
          | ⁰F{" "}
        </span>{" "}
      </div>
    );
  }
}
