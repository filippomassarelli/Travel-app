// Function that updates UI with results from search

// to be used by handleFind

function displaySearch(data) {
  //Clear UI
  const results = document.getElementById("search-results");
  results.innerHTML = "";
  results.style.display = "block";

  const timeText = Client.timeDiff(data.departureDate);

  let resultsHTML;

  resultsHTML = `<div class="search-card">                 
  <img src="${data.cityImgSrc}">
  <div class="search-detail">
  <h1>${data.city}</h1>
  <p> ${data.temp}°C - ${timeText} </p>
  <button id="save" class="cta" href="#log-section">save</button>
  </div>
  </div>`;

  //add resultsHTML to DOM
  console.log("updateUI is running");
  console.log(resultsHTML);
  results.insertAdjacentHTML("beforeend", resultsHTML);
  document
    .getElementById("save")
    .addEventListener("click", () => Client.handleSave(data));
}

export { displaySearch };
