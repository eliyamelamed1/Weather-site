export const API_KEY = "760755181080d270ed857745f7a1364e";

export const endpoints = (city) => ({
  forecast: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`,
  currentWeather: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`,
});
export const options = (inputValue) => {
  const option = {
    method: "GET",
    url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${inputValue}`,
    headers: {
      "X-RapidAPI-Key": "e9ac1b5effmsh2007b9e46e1f088p1c42cejsn73b5c63cf63f",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };
  return option;
};
