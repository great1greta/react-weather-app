import React from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
  return (
    <div>
      <div className="row">
        <div className="col-7">
          <form className="mb-4">
            <input
              type="search"
              className="form-control"
              placeholder="Enter city name..."
              autoFocus="on"
            />
          </form>
        </div>
        <div className="col-5 ">
          <button className="btn btn-primary" type="Search">
            Search
          </button>
          <button className="btn btn-light">Current location</button>
        </div>
      </div>

      <div className="currentTime">Saturday 18:45</div>
      <div className="row">
        <div className="col-7 todayCard">
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="weather icon"
          />
          <span className="todayTemperature">19</span>{" "}
          <span className="units">°C |°F</span>
        </div>
        <div className="col-5">
          <ul className="mt-4">
            <li>Description:</li>
            <li>Humidity:</li>
            <li>Wind:</li>
          </ul>
        </div>
      </div>
      <h1 className="city">London</h1>
    </div>
  );
}
