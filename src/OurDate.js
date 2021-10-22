import React from "react";

export default function OurDate(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

  let day = days[props.fecha.getDay()];
  let hours = props.fecha.getHours();

  if (hours < 10) {
    hours = `0${hours} `;
  }
  let minutes = props.fecha.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <h6>
      {day}, {hours}:{minutes} hrs
    </h6>
  );
}
