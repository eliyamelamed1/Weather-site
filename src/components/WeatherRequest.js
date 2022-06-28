import axios from "axios";
import { useEffect, useState } from "react";
import API_KEY from "./API_KEY";

function WeatherRequest(props) {
  const [response, setResponse] = useState();
  const [ForeCastResponse, setForeCastResponse] = useState();
  const ForeCastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props}&units=metric&appid=${API_KEY}`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${props}&units=metric&appid=${API_KEY}`;

  useEffect(() => {
    const Request = async () => {
      await axios.get(ForeCastUrl).then((response) => {
        setResponse(response.data);
      });
    };
    Request();
  }, [props]);

  useEffect(() => {
    const Request = async () => {
      await axios.get(url).then((response) => {
        setForeCastResponse(response.data);
      });
    };
    Request();
  }, [props]);
  return [response, ForeCastResponse];
}

export default WeatherRequest;
