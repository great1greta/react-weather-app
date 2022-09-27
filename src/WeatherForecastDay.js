import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <div className="ForecastDay">{props.data.dt} </div>
      <div>
        <WeatherIcon code={props.data.weather[0].icon} size={30} />{" "}
      </div>
      <span className="Forecast-temp-max">{props.data.temp.max}°</span>
      <span className="Forecast-temp-min">{props.data.temp.min}°</span>
    </div>
  );
}
