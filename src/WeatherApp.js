import React from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
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
          <span className="todayTemperature">19</span>
          <span className="units">°C | °F</span>
        </div>
        <div className="col-6">
          <ul className="mt-4">
            <li>Description: Partly Cloudy</li>
            <li>Humidity: 12%</li>
            <li>Wind: 3km/h</li>
          </ul>
        </div>
      </div>
      <h1 className="city mt-2 ">London</h1>
    </div>
  );
}
