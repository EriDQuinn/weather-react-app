import React from "react";

export default function Search(props) {
  return (
    <div className="Search">
      <h4 className="text-center">{data.city}</h4>
      <h4 className="icon">
        <img src={data.iconUrl} alt={data.description}></img>
      </h4>
      <h2 className="temperature"> {Math.round(data.temp)} °C</h2>
      <div>
        <OurDate fecha={data.d} />
      </div>
      <hr></hr>
      <p>Description: {data.description} </p>
      <p>Humidity: {data.humidity} %</p>
      <p>Wind: {data.wind} km/h</p>
    </div>
  );
}
