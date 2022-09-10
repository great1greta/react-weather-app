import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <ul className="mt-4">
        <li>
          Description:{" "}
          <span className="text-capitalize text-decoration-underline">
            {props.info.description}
          </span>
        </li>
        <li>Humidity: {props.info.humidity}%</li>
        <li>Wind: {Math.round(props.info.wind)}km/h</li>
      </ul>
    </div>
  );
}
