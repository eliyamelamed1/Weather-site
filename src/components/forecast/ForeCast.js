import React from "react";
import ForeCastComponent from "./ForeCastComponent";
import "./_forecast.scss";
import WeatherRequest from "../WeatherRequest";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import object from "../object";
import object2 from "../object2";

function ForeCast() {
  // const [object2, object] = WeatherRequest("London");
  console.log(object2, object);

  return (
    <div className="forecast_container">
      <Swiper
        slidesPerView={2}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
          1352: {
            slidesPerView: 4,
          },
          1500: {
            slidesPerView: 8,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {object2.list.slice(0, 8).map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <ForeCastComponent
                date={new Date(data.dt * 1000).toLocaleDateString([], {
                  day: "numeric",
                  month: "numeric",
                })}
                time={new Date(data.dt * 1000).toLocaleTimeString([], {
                  hour: "numeric",
                  minute: "numeric",
                })}
                degree={data.main.temp.toFixed()}
                icon={data.weather[0].icon}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ForeCast;
