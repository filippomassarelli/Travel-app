const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
// const regeneratorRuntime = require("regenerator-runtime");

const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const units = "&units=metric";
const weatherKey = "&appid=" + process.env.WEATHER_KEY;

const fetchWeather = async (city) => {
  const res = await axios(baseUrl + city + weatherKey + units);
  try {
    const data = {
      city: res.data.name,
      temp: Math.round(res.data.main.temp),
      icon: res.data.weather[0].icon,
      description: res.data.weather[0].description,
    };
    return data;
  } catch (e) {
    console.log("Error", e);
  }
};

module.exports = fetchWeather;
