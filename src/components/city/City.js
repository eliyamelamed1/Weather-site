import React from "react";
import "./_city.scss";

function City(props) {
  const currentWeatherData = props.currentWeatherData.data;

  const city =
    currentWeatherData.name
      .toLowerCase()
      .replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase()) +
    " ," +
    currentWeatherData.sys.country;

  const date = new Date(
    (currentWeatherData.dt + currentWeatherData.timezone) * 1000
  ).toUTCString();

  return (
    <div className="city_container">
      <div className="city">
        <h1>{city}</h1>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default City;
