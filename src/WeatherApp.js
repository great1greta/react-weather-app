import React, { useState } from "react";
import axios from "axios";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setLoaded(true);
    setWeatherData({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (loaded) {
    return (
      <div>
        <div className="row">
          <div className="col-7 p-0">
            <form className=" mb-4">
              <input
                type="search"
                className="form-control"
                placeholder="Enter city name..."
                autoFocus="on"
              />
            </form>
          </div>
          <div className="col-5 p-0">
            <button className="btn btn-primary me-4" type="Search">
              Search
            </button>
            <button className="btn btn-light border border-primary text-muted">
              Current location
            </button>
          </div>
        </div>

        <div className="currentTime">Saturday 18:45</div>
        <div className="row">
          <div className="col-6 todayCard">
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt="weather icon"
            />
            <span className="todayTemperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="units"> °C | °F</span>
          </div>
          <div className="col-6">
            <ul className="mt-4">
              <li>Description: {weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
        <h1 className="city mt-2 ">London</h1>
      </div>
    );
  } else {
    const apiKey = "197bcc774e27a469ef9bf7b4d6ee8b5e";
    let city = "Tokyo";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
