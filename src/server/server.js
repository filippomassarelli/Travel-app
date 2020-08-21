// Here we set up the server, define the endpoints and run
// server side js functions that need hiding from the client e.g. APIs

/* Global variables */

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

// Set up an instance of app
const app = express();
app.use(express.static("dist"));

//Configure express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Cors for cross origin allowance
app.use(cors());

const port = 5000;
app.listen(process.env.PORT || port, () => {
  console.log(`Travel app running on port ${port}!`);
});
