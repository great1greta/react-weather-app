import axios from "axios";
import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "197bcc774e27a469ef9bf7b4d6ee8b5e";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Thu </div>
          <div className="ForecastIcon">
            <img src={props.forecastIcon} />
          </div>
          <span className="Forecast-temp-max">19°</span>
          <span className="Forecast-temp-min">10°</span>
        </div>
      </div>
    </div>
  );
}
