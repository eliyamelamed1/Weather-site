import "./App.css";
import Logo from "./components/Logo/Logo";
import SearchBar from "./components/searchbar/SearchBar";
import City from "./components/city/City";
import WeatherInfo from "./components/weatherinfo/WeatherInfo";
import ForeCast from "./components/forecast/ForeCast";
import { useStateValue } from "./context/StateProvider";
import WeatherRequest from "./requests/WeatherRequest";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function App() {
  const { Location } = useStateValue();
  const [currentWeather, forecast] = WeatherRequest(Location);
  const { currentWeatherData, currentWeatherStatus } = currentWeather;
  const { forecastData } = forecast;

  if (currentWeatherStatus === "loading") {
    return (
      <div>
        <header>
          <Logo name={"WEATHER SITE"} />
        </header>
        <div className="body">
          <SearchBar />
          <div className="loading">
            <Box sx={{ display: "flex" }}>
              <CircularProgress size={50} />
            </Box>
          </div>
        </div>
      </div>
    );
  }
  if (currentWeatherStatus === "error") {
    return (
      <div>
        <header>
          <Logo name={"WEATHER SITE"} />
        </header>
        <div className="body">
          <SearchBar />
          <h1>Cant fetch data about this city</h1>
        </div>
      </div>
    );
  }
  if (currentWeatherStatus === "success")
    return (
      <div>
        <header>
          <Logo name={"WEATHER SITE"} />
        </header>
        <div className="body">
          <SearchBar />
          <City currentWeatherData={currentWeatherData} />
          <WeatherInfo currentWeatherData={currentWeatherData} />
          <div className="time_weather">
            <Logo name={"Forecast"} />
            <ForeCast forecastData={forecastData} />
          </div>
        </div>
      </div>
    );
}

export default App;
