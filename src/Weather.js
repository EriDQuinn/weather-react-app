import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import Forecast from "./Forecast";

import Search from "./Search";

export default function Weather(props) {
  const [data, setData] = useState({ loaded: false });
  const [city, setCity] = useState(props.city);

  function showResponse(response) {
    //var d = new Date(response.data.dt * 1000);
    //console.log(d.getDay());
    console.log(response.data.weather["0"].icon);
    setData({
      loaded: true,
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      d: new Date(response.data.dt * 1000),
      description: response.data.weather["0"].description,
      humidity: response.data.main.humidity,
      //iconUrl: `http://openweathermap.org/img/wn/${response.data.weather["0"].icon}@2x.png`,
      icon: response.data.weather["0"].icon,
    });
  }
  function search() {
    let apiKey = "e36512df4df508262b473b23a2ee8768";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (data.loaded) {
    return (
      <div className="Weather d-flex">
        <div className="container p-3">
          <form className="d-flex m-2" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search"
              className="form-control-sm m-2 border-light"
              onChange={handleCityChange}
            />
            <button className="btn btn-sm btn-info m-2" type="submit">
              Search
            </button>
          </form>
          <Search data={data} />
        </div>

        <div className="container p-3">
          <Forecast />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
