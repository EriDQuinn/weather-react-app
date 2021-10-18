import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="Weather d-flex">
      <div className="container p-3">
        <form className="d-flex m-2">
          <input
            type="search"
            placeholder="Search"
            className="form-control-sm m-2 border-light"
          />
          <button className="btn btn-sm btn-info m-2" type="submit">
            Search
          </button>
        </form>
        <h4 className="text-center">"city"</h4>
        <h4 className="icon">
          <img src="{icon}" alt="description"></img>
        </h4>
        <h2 className="temp"> Math.round(temperature) °C</h2>
        <p>Sunday 11, 18:20</p>
        <hr></hr>
        <p>Description: description </p>
        <p>Humidity: humidity %</p>
        <p>Wind: wind km/h</p>
      </div>

      <div class="container p-3">forecast</div>
    </div>
  );
}
