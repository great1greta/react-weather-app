import React from "react";
import "./App.css";
import WeatherApp from "./WeatherApp";

export default function App() {
  return (
    <div className="Wrapper">
      <div className="App">
        <div>
          <WeatherApp />
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
    </div>
  );
}
