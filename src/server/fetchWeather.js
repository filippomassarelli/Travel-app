const axios = require("axios");
const fetch = require("node-fetch");
const dotenv = require("dotenv");
dotenv.config();
const regeneratorRuntime = require("regenerator-runtime");

const geoBaseUrl = "http://api.geonames.org/searchJSON?axRows=1&type=jsonm&q=";
const geoUser = "&username=" + process.env.GEONAMES_USER;

const weatherBaseUrl = "https://api.weatherbit.io/v2.0/history/daily?";
const weatherKey = process.env.WEATHERBIT_KEY;

async function geoApi(city) {
  const geoReq = await fetch(geoBaseUrl + city + geoUser);
  const geoRes = await geoReq.json();
  const cityId = geoRes.geonames[0].geonameId;
  return cityId;
}

async function weatherApi(cityId) {
  const weatherReq = await fetch(
    `${weatherBaseUrl}key=${weatherKey}&city_id=${cityId}&start_date=2020-08-30&end_date=2020-08-31`
  );
  try {
    const weatherRes = await weatherReq.json();
    const data = {
      city: weatherRes.city_name,
      temp: Math.round(weatherRes.data[0].temp),
    };
    return data;
  } catch (error) {
    console.log(error);
  }
}

const fetchWeather = async (city) => {
  const mydata = await geoApi(city).then(async (cityId) => {
    const weatherReq = await fetch(
      `${weatherBaseUrl}key=${weatherKey}&city_id=${cityId}&start_date=2020-08-30&end_date=2020-08-31`
    );
    try {
      const weatherRes = await weatherReq.json();

      const data = {
        city: weatherRes.city_name,
        temp: Math.round(weatherRes.data[0].temp),
      };
      return data;
    } catch (error) {
      console.log(error);
    }
  });

  return mydata;
};

module.exports = fetchWeather;
