import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherDetails(props) {
  return (
    <div className="weatherDetails">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">⁰C </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Feels like: <strong> {Math.round(props.data.feels)}</strong>{" "}
            </li>
            <li>
              Humidity: <strong> {props.data.humidity}%</strong>
            </li>
            <li>
              Wind: <strong> {Math.round(props.data.wind)}mph</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
