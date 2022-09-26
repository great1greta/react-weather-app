import React from "react";
import "/styles/App.css";
import WeatherApp from "./WeatherApp";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <div className="container">
          <div>
            <WeatherApp defaultCity="London" />
          </div>
        </div>
      </div>
      <small>
        <a
          href="https://github.com/great1greta/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code{" "}
        </a>
        by Greta Vasiulyte
      </small>
    </div>
  );
}
