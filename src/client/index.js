import { displayLog } from "./js/displayLog";
import { displaySearch } from "./js/displaySearch";
import { handleFind } from "./js/handleFind";
import { handleSave } from "./js/handleSave";

import "./styles/all.scss";

import "./media/travel-homepage.jpg";

window.addEventListener("DOMContentLoaded", init);

export { displayLog, displaySearch, handleFind, handleSave };

// Here we import all styles, media and client side Js functions, then export
// for webpack to take as entry point and bundle everything up

// import functions
// import styles

// import media
// export functions
