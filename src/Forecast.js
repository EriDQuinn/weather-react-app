import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./forecast.css";

const defaults = {
  icon: "CLEAR_DAY",
  color: "goldenrod",
  size: 22,
  animate: true,
};
export default function Forecast() {
  return (
    <div className="Forecast container">
      <div className="row">
        <div className="col">
          <div className="card p-3 bg-transparent border border-white">
            <p>Monday</p>

            <ReactAnimatedWeather
              icon={defaults.icon}
              color={defaults.color}
              size={defaults.size}
              animate={defaults.animate}
            />

            <p>10ºC</p>
          </div>
        </div>
        <div className="col">
          <div className="card p-3 bg-transparent col border border-white">
            <p>Tuesday</p>
            <ReactAnimatedWeather
              icon="CLOUDY"
              color="gray"
              size={defaults.size}
              animate={defaults.animate}
            />
            <p>10ºC</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card p-3 bg-transparent border border-white">
            <p>Wednesday</p>
            <ReactAnimatedWeather
              icon="RAIN"
              color="blue"
              size={defaults.size}
              animate={defaults.animate}
            />
            <p>10ºC</p>
          </div>
        </div>
        <div className="col">
          <div className="card p-3 bg-transparent border border-white">
            <div className="card-header">Thursday</div>

            <ReactAnimatedWeather
              icon={defaults.icon}
              color={defaults.color}
              size={defaults.size}
              animate={defaults.animate}
            />

            <p>10ºC</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card p-3 bg-transparent border border-white">
            <p>Friday</p>
            <ReactAnimatedWeather
              icon="WIND"
              color="white"
              size={defaults.size}
              animate={defaults.animate}
            />
            <p>10ºC</p>
          </div>
        </div>
        <div className="col">
          <div className="card p-3 bg-transparent border border-white">
            <p>Saturday</p>
            <ReactAnimatedWeather
              icon={defaults.icon}
              color={defaults.color}
              size={defaults.size}
              animate={defaults.animate}
            />
            <p>10ºC</p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
