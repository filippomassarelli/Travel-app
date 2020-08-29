// const axios = require("axios");
const fetch = require("node-fetch");
const dotenv = require("dotenv");
dotenv.config();

const key = process.env.PIXABAY_KEY;

const fetchPixabay = async (city) => {
  const response = await fetch(
    `https://pixabay.com/api/?image_type=photo&key=${key}&q=${city}`
  );

  try {
    const res = await response.json();

    if (res.totalHits < 1) {
      return "https://cdn.pixabay.com/photo/2016/01/19/15/48/luggage-1149289_1280.jpg";
    } else {
      return res.hits[0].webformatURL;
    }
  } catch (error) {
    return "https://cdn.pixabay.com/photo/2016/01/19/15/48/luggage-1149289_1280.jpg";
  }
};

module.exports = fetchPixabay;
