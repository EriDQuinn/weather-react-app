import React from "react";
import "./forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast() {
  return (
    <div className="Forecast container">
      <div className="row">
        <div className="col">
          <div className="card p-3 bg-transparent border border-white">
            <p>Monday</p> <WeatherIcon code="50d" size={36} />
            <div>
              <span className="TempMin">10ºC</span>
              <span className="TempMax">20ºC</span>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card p-3 bg-transparent col border border-white">
            <p>Tuesday</p>
            <WeatherIcon code="50d" />
            <p>10ºC</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card p-3 bg-transparent border border-white">
            <p>Wednesday</p>
            <WeatherIcon code="50d" />
            <p>10ºC</p>
          </div>
        </div>
        <div className="col">
          <div className="card p-3 bg-transparent border border-white">
            <div className="card-header">Thursday</div>

            <WeatherIcon code="50d" />

            <p>10ºC</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card p-3 bg-transparent border border-white">
            <p>Friday</p>
            <WeatherIcon code="50d" />
            <p>10ºC</p>
          </div>
        </div>
        <div className="col">
          <div className="card p-3 bg-transparent border border-white">
            <p>Saturday</p>
            <WeatherIcon code="50d" />
            <p>10ºC</p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
