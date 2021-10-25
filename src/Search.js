import React from "react";
import OurDate from "./OurDate";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

export default function Search(props) {
  return (
    <div className="Search">
      <h4 className="text-center">{props.data.city}</h4>
      <h4 className="icon">
        <WeatherIcon
          code={props.data.icon}
          alt={props.data.description}
          size={82}
        />
      </h4>
      <Temperature celcius={props.data.temp} />

      <OurDate fecha={props.data.d} />

      <hr></hr>
      <p>Description: {props.data.description} </p>
      <p>Humidity: {props.data.humidity} %</p>
      <p>Wind: {props.data.wind} km/h</p>
    </div>
  );
}
