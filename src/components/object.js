const object = {
  coord: { lon: 34.75, lat: 31.5 },
  weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01n" }],
  base: "stations",
  main: {
    temp: 30.18,
    feels_like: 28.39,
    temp_min: 27.02,
    temp_max: 30.19,
    pressure: 1006,
    humidity: 20,
    sea_level: 1006,
    grnd_level: 987,
  },
  visibility: 10000,
  wind: { speed: 5.7, deg: 319, gust: 4.31 },
  clouds: { all: 0 },
  dt: 1656423089,
  sys: {
    type: 2,
    id: 2002441,
    country: "IL",
    sunrise: 1656383911,
    sunset: 1656434980,
  },
  timezone: 10800,
  id: 294640,
  name: "Israel",
  cod: 200,
};

export default object;
