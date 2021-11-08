import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./forecastDay.css";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}º`;
  }
  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}º`;
  }
  return (
    <div className="card p-3 bg-transparent border border-white">
      <div className="card-header text-center">{day()}</div>{" "}
      <WeatherIcon code={props.data.weather["0"].icon} size={36} />
      <div>
        <span className="TempMin">{minTemp()}</span>
        <span className="TempMax">{maxTemp()}</span>
      </div>
    </div>
  );
}
