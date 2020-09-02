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
      return "https://cdn.pixabay.com/photo/2017/08/17/07/47/travel-2650303_1280.jpg";
    } else {
      return res.hits[0].webformatURL;
    }
  } catch (error) {
    return "https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_1280.jpg";
  }
};

module.exports = fetchPixabay;
