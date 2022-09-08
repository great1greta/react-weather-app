import React from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
  return (
    <div>
      <form className="mb-4">
        <input type="search" placeholder="Enter city name..." />
        <button type="button" className="btn btn-primary" type="Search">
          Search
        </button>
        <button type="button" className="btn btn-light">
          Current location
        </button>
      </form>
      <div className="CurrentTime">Saturday 18:45</div>
      <div className="row">
        <div className="col-8">
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="weather icon"
          />
          <span className="TodayTemperature">19</span>{" "}
          <span className="Units">°C |°F</span>
        </div>
        <div className="col-4">
          <ul>
            <li>Description:</li>
            <li>Humidity:</li>
            <li>Wind:</li>
          </ul>
        </div>
      </div>
      <h1 className="City">London</h1>
    </div>
  );
}
