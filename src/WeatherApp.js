import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import Temperature from "./Temperature.js";
import WeatherForecast from "./WeatherForecast";
import WeatherIcon from "./WeatherIcon";
import "./WeatherApp.css";

export default function WeatherApp(props) {
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setLoaded(true);
    setWeatherData({
      city: response.data.name,

      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "197bcc774e27a469ef9bf7b4d6ee8b5e";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (loaded) {
    return (
      <div className="WeatherApp">
        <form onSubmit={handleSubmit} className=" mb-4">
          <div className="row">
            <div className="col-7 p-0">
              <input
                type="search"
                className="form-control"
                placeholder="Enter city name..."
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-1 p-0">
              <button className="btn btn-primary me-4" type="Search">
                Search
              </button>
            </div>
            <div className="col-4 ps-5">
              <button className="btn btn-light border border-primary text-muted">
                Current location
              </button>
            </div>
          </div>
        </form>

        <div className="currentTime">
          <FormattedDate date={weatherData.date} />
        </div>
        <div className="row">
          <div className="col-6 todayCard">
            <WeatherIcon iconData={weatherData.iconUrl} />
            <Temperature celsius={weatherData.temperature} />
          </div>
          <div className="col-6">
            <WeatherInfo info={weatherData} />
          </div>
        </div>
        <h1 className="city mt-2 ">{weatherData.city}</h1>
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
