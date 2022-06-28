import React from "react";
import "./_city.scss";
import object from "../object";

function City() {
  const date = new Date().toLocaleString("en-gb", {
    weekday: "long",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "numeric",
  });

  return (
    <div className="city_container">
      <div className="city">
        <h1>
          {object.name}, {object.sys.country}
        </h1>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default City;
