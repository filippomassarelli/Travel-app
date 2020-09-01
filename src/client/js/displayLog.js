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

    const timeText = Client.timeDiff(trip.departureDate);

    const resultsHTML = `
                        <img src=${trip.cityImgSrc}/>
                        <h3>${trip.city} - ${timeText}</h3>
                        <p>${trip.temp}°C with ${trip.description}</p>
                        `;
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete";
    // value of button is trip.logId
    const btnValue = { value: trip.logId };
    deleteButton.setAttribute("value", btnValue);
    deleteButton.classList.add("cta");

    deleteButton.addEventListener("click", () => {
      console.log(btnValue);
      Client.postData("/delete", btnValue).then((newLog) => displayLog(newLog));
    });

    card.insertAdjacentHTML("beforeend", resultsHTML);
    card.appendChild(deleteButton);
    loggedResults.appendChild(card);
  });
}

export { displayLog };
