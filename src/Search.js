import React from "react";
import OurDate from "./OurDate";
import WeatherIcon from "./WeatherIcon";

export default function Search(props) {
  return (
    <div className="Search">
      <h4 className="text-center">{props.data.city}</h4>
      <h4 className="icon">
        <WeatherIcon code={props.data.icon} alt={props.data.description} />
      </h4>
      <h2 className="temperature"> {Math.round(props.data.temp)} °C</h2>
      <div>
        <OurDate fecha={props.data.d} />
      </div>
      <hr></hr>
      <p>Description: {props.data.description} </p>
      <p>Humidity: {props.data.humidity} %</p>
      <p>Wind: {props.data.wind} km/h</p>
    </div>
  );
}
