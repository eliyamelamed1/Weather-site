import "./_forecast-component.scss";
import { BsFillSunFill } from "react-icons/bs";
import icons from "../WeatherIconsObject";


function ForeCastComponent(props) {

  return (
    <div className="ForeCastComponent_container ">
      <h1>{props.date}</h1>
      <h1>{props.time}</h1>
      {icons[1][props.icon]}
      <p>{props.degree}°</p>
    </div>
  );
}

export default ForeCastComponent;
