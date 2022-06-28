import React from "react";
import "./_weather-info.scss";
import object from "../object";
import icons from "../WeatherIconsObject";
import WeatherRequest from "../WeatherRequest";
function WeatherInfo() {
  // const [object2, object] = WeatherRequest("israel");

  const sunrise = new Date(object.sys.sunrise * 1000).toLocaleTimeString([], {
    hour: "numeric",
    minute: "numeric",
  });
  const sunset = new Date(object.sys.sunset * 1000).toLocaleTimeString([], {
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <div className="weather">
      <div className="weather_left">
        {icons[0][object.weather[0].icon]}
        <div className="weather_info">
          <h1>{object.main.temp.toFixed()}°</h1>
          <p>{object.weather[0].description}</p>
        </div>
      </div>
      <div className="weather_info_right">
        <div className="weather_info">
          <div>
            <h1>{object.main.temp_max.toFixed()}°</h1>
            <p>Hight</p>
          </div>
          <div>
            <h1>{object.main.temp_min.toFixed()}°</h1>
            <p>Low</p>
          </div>
        </div>
        <div className="weather_info">
          <div>
            <h1>{object.wind.speed}m/s</h1>
            <p>Wind</p>
          </div>
          <div>
            <h1>{object.clouds.all}%</h1>
            <p>Clouds</p>
          </div>
        </div>
        <div className="weather_info">
          <div>
            <h1>{sunrise}</h1>
            <p>Sunrise</p>
          </div>
          <div>
            <h1>{sunset}</h1>
            <p>Sunset</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
