// Here we set up the server, define the endpoints and run
// server side js functions that need hiding from the client e.g. APIs

/* Global variables */
const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const fetch = require("node-fetch");
const fetchWeather = require("./fetchWeather");
const fetchPixabay = require("./fetchPixabay");

// const trips = {};
// let id = 0;
// let trip = {};

// Local database
let logId = 0;
let tripLog = [];

/* Set up */

// Setup dotenv
const dotenv = require("dotenv");
dotenv.config();

// instantiate app
const app = express();

// setup express to use body-parser as middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setup main project folder
app.use(express.static("dist"));

// setup Cors for cross origin allowance
app.use(cors());

// Spin server
const port = 5005;
app.listen(process.env.PORT || port, () => {
  console.log(`Travel app running on port ${port}!`);
});

// ======================

// ENDPOINTS

// -- Home route
app.get("/", (req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});

// -- Find route
app.post("/find", async (req, res) => {
  try {
    const weatherData = await fetchWeather(req.body.destinationCity);
    const cityImgSrc = await fetchPixabay(req.body.destinationCity);
    // here do Pixabay API too: const pixabayData
    const trip = { logId, ...weatherData, cityImgSrc };
    tripLog.push(trip);
    logId++;
    console.log(tripLog);
    res.status(200).send(trip);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

// const fetchAPI = require("./meaningCloud");

// ---- ROUTES

// -- setup Submit route endpoint
// app.post("/submit", async (req, res) => {
//   const userInput = req.body;

//   try {
//     const apiData = await fetchAPI(userInput);
//     sentimentAnalysis = JSON.stringify(apiData);
//     res.status(200).send(sentimentAnalysis);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });
