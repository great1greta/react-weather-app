import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <div className="ForecastDay">{props.dayData.dt} </div>
      <div>
        <WeatherIcon code={props.dayData.weather[0].icon} size={30} />{" "}
      </div>
      <span className="Forecast-temp-max">{props.dayData.temp.max}°</span>
      <span className="Forecast-temp-min">{props.dayData.temp.min}°</span>
    </div>
  );
}
