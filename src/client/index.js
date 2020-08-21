// Here we import all styles, media and client side Js functions, then export
// for webpack to take as entry point and bundle everything up

// import functions
import { displayLog } from "./js/displayLog";
import { displaySearch } from "./js/displaySearch";
import { handleFind } from "./js/handleFind";
import { handleSave } from "./js/handleSave";

// import styles
import "./styles/searchSection.scss";
import "./styles/header.scss";

// import media
import "./media/travel-homepage.jpg";

// export functions
export { displayLog, displaySearch, handleFind, handleSave };
