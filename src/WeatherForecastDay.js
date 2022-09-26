import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <div className="WeatherForecastDay">
      <div className="ForecastDay">{props.dayData[0].dt} </div>
      <div className="ForecastIcon">
        <WeatherIcon />
      </div>
      <span className="Forecast-temp-max">
        {Math.round(props.dayData[0].temp.max)}°
      </span>
      <span className="Forecast-temp-min">
        {Math.round(props.dayData[0].temp.min)}°
      </span>
    </div>
  );
}
