// const axios = require("axios");
const fetch = require("node-fetch");
const dotenv = require("dotenv");
dotenv.config();

const key = process.env.PIXABAY_KEY;

const fetchPixabay = async (city) => {
  const response = await fetch(
    `https://pixabay.com/api/?image_type=photo&key=${key}&q=${city}`
  );
  //   const response = await axios(
  //     "https://pixabay.com/api/?key=18043215-06632a45c266903ba3871f9e2&q=Madrid&image_type=photo"
  //   );
  //   const res = JSON.stringify(response);
  try {
    const res = await response.json();
    console.log(key);
    if (res.totalHits < 1) {
      return "https://cdn.pixabay.com/photo/2016/01/19/15/48/luggage-1149289_1280.jpg";
    } else {
      return res.hits[0].webformatURL;
    }
  } catch (error) {
    return "https://cdn.pixabay.com/photo/2016/01/19/15/48/luggage-1149289_1280.jpg";
  }
};

//   try {
//     // const res = await response.json();

//     const cityImgSrc = await response.hits[0].largeImageURL;
//     console.log("success");
//     console.log(cityImgSrc);
//     return cityImgSrc;
//   } catch (e) {
//     console.log("Error", e);
//   }
// };

module.exports = fetchPixabay;
