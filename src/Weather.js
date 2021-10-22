import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import Forecast from "./Forecast";
import OurDate from "./OurDate";
import Search from "./Search";

export default function Weather(props) {
  const [data, setData] = useState({ loaded: false });

  function showResponse(response) {
    //var d = new Date(response.data.dt * 1000);
    //console.log(d.getDay());
    setData({
      loaded: true,
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      d: new Date(response.data.dt * 1000),
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
          <Search />
        </div>

        <div className="container p-3">
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
