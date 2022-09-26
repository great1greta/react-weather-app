import React from "react";

export default function WeatherIcon(props) {
  return (
    <div>
      <span>
        <img src={props.iconData} />
      </span>
    </div>
  );
}
