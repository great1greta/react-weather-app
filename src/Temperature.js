import React, { useState } from "react";
import Temperature from "./styles/Temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="Temperature">
        <span className="todayTemperature">{Math.round(props.celsius)}</span>
        <span className="units">
          {" "}
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F{" "}
          </a>{" "}
        </span>
      </span>
    );
  } else {
    return (
      <span className="Temperature">
        <span className="todayTemperature">
          {Math.round((props.celsius * 9) / 5 + 32)}
        </span>
        <span className="units">
          {" "}
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>
          | °F{" "}
        </span>
      </span>
    );
  }
}
