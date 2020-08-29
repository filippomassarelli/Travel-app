// Function that updates #trip-log section of UI with results from search
// if the save button is clicked

// to be used in handleSave

function displayLog(data) {
  console.log("displayLog running, data received from server is");
  console.log(data);

  //Clear results UI
  const loggedResults = document.getElementById("saved-trips");
  loggedResults.innerHTML = "";
  loggedResults.style.display = "block";

  data.map((trip) => {
    const card = document.createElement("div");
    card.classList.add("log-card");

    const weatherImgSrc = `http://openweathermap.org/img/wn/${trip.icon}@2x.png`;
    const resultsHTML = `
                        <img src="${trip.cityImgSrc}">
                        <div class="card">
                        <h1>${trip.city}</h1>
                        <img src="${weatherImgSrc}">
                        <p>${trip.temp} °C with ${trip.description}</p>
                        <button id="delete">Delete Trip</button>
                        </div>`;
    card.insertAdjacentHTML("beforeend", resultsHTML);
    loggedResults.appendChild(card);
  });
}

export { displayLog };
