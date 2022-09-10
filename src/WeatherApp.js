import React, { useState } from "react";
import axios from "axios";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({ city: "London" });
  const [city, setCity] = useState(``);

  function handleResponse(response) {
    setLoaded(true);
    setWeatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleRequest(event) {
    event.preventDefault();
    const apiKey = "197bcc774e27a469ef9bf7b4d6ee8b5e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div>
        <div className="row">
          <div className="col-7 p-0">
            <form onSubmit={handleRequest} className=" mb-4">
              <input
                type="search"
                className="form-control"
                placeholder="Enter city name..."
                autoFocus="on"
                onChange={(e) => setCity(e.target.value)}
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
              <li>
                Description:{" "}
                <span className="text-capitalize">
                  {weatherData.description}
                </span>
              </li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)}km/h</li>
            </ul>
          </div>
        </div>
        <h1 className="city mt-2 ">{weatherData.city}</h1>
      </div>
    );
  } else {
    const apiKey = "197bcc774e27a469ef9bf7b4d6ee8b5e";
    let city = "London";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
