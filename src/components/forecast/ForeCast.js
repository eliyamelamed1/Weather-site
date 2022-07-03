import "./_forecast.scss";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import ForeCastComponent from "./ForeCastComponent";
import { Pagination } from "swiper";
import React from "react";

function ForeCast(props) {
  
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
        {props.forecastData?.data.list.slice(0, 8).map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <ForeCastComponent
                date={
                  new Date(
                    (data.dt + props.forecastData?.data.city.timezone) * 1000
                  ).getUTCDate() +
                  "." +
                  new Date(
                    (data.dt + props.forecastData?.data.city.timezone) * 1000
                  ).getUTCMonth()
                }
                time={
                  new Date(
                    (data.dt + props.forecastData?.data.city.timezone) * 1000
                  ).getUTCHours() + ":00"
                }
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
