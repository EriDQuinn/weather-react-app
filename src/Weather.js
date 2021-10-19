import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [data, setData] = useState({ loaded: false });
  function showResponse(response) {
    setData({
      loaded: true,
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather["0"].description,
      humidity: response.data.main.humidity,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather["0"].icon}@2x.png`,
    });
  }

  if (data.loaded) {
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
          <h4 className="text-center">{data.city}</h4>
          <h4 className="icon">
            <img src={data.iconUrl} alt={data.description}></img>
          </h4>
          <h2 className="temperature"> {Math.round(data.temp)} °C</h2>
          <p>Sunday 11, 18:20</p>
          <hr></hr>
          <p>Description: {data.description} </p>
          <p>Humidity: {data.humidity} %</p>
          <p>Wind: {data.wind} km/h</p>
        </div>

        <div class="container p-3">
          <Forecast />
        </div>
      </div>
    );
  } else {
    let apiKey = "e36512df4df508262b473b23a2ee8768";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showResponse);
    return "Loading";
  }
}
