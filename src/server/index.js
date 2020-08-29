// Here we set up the server, define the endpoints and run
// server side js functions that need hiding from the client e.g. APIs

/* Global variables */
const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const fetchWeather = require("./fetchWeather");
const fetchPixabay = require("./fetchPixabay");

// Local database
let logId = 0;
let searchLog = [];
let saveLog = [];

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

    const trip = { logId, ...weatherData, cityImgSrc };
    searchLog.push(trip);
    logId++;
    console.log(searchLog);
    res.status(200).send(trip);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

app.post("/save", (req, res) => {
  console.log(
    "/save endpoint hit with post request from handleSave.js with req.body:"
  );
  console.log(req.body);

  saveLog.push(req.body);

  res.status(200).send(saveLog);
});
