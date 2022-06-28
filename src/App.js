import "./App.css";
import Logo from "./components/Logo/Logo";
import SearchBar from "./components/searchbar/SearchBar";
import City from "./components/city/City";
import WeatherInfo from "./components/weatherinfo/WeatherInfo";
import ForeCast from "./components/forecast/ForeCast";

function App() {
  return (
    <div>
      <header>
        <Logo name={"WEATHER SITE"} />
      </header>
      <div className="body">
        <SearchBar />
        <City />
        <WeatherInfo />
        <div className="time_weather">
          <Logo name={"Forecast"} />
          <ForeCast />
        </div>
      </div>
    </div>
  );
}

export default App;
