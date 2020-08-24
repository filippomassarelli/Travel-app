// Here we set up the server, define the endpoints and run
// server side js functions that need hiding from the client e.g. APIs

/* Global variables */
const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const fetch = require("node-fetch");
// const trips = {};
// let id = 0;
// let trip = {};

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

// -- setup Home route endpoint
app.get("/", (req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});

// Spin server
const port = 5005;
app.listen(process.env.PORT || port, () => {
  console.log(`Travel app running on port ${port}!`);
});

// ======================
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

// // spin server
// const port = 2099;
// app.listen(process.env.PORT || port, function () {
//   console.log(`App listening on port ${port}`);
// });
