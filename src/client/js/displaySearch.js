// Function that updates UI with results from search

// to be used by handleFind

function displaySearch(data) {
  //Clear UI
  const results = document.getElementById("search-results");
  results.innerHTML = "";
  results.style.display = "block";

  const timeText = Client.timeDiff(data.departureDate);

  let resultsHTML;
  //   if (!data.error) {
  const weatherImgSrc = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;
  resultsHTML = `<div class="search-card">                  
  <img src="${data.cityImgSrc}">
  <div class="search-detail">
  <h1>${data.city}</h1>
  <h3>${timeText}</h3>
  <img src="${weatherImgSrc}">
  <p>${data.temp} °C with ${data.description}</p>
  <button id="save" class="cta">save</button>
  </div>
  </div>`;
  //   } else {
  //     resultsHTML = `
  //                   <div>
  //                   <h1>Sorry!</h1>
  //                   <p>${data.error}</p>
  //                   </div>`;
  //   }

  //add resultsHTML to DOM
  console.log("updateUI is running");
  console.log(resultsHTML);
  results.insertAdjacentHTML("beforeend", resultsHTML);
  document
    .getElementById("save")
    .addEventListener("click", () => Client.handleSave(data));

  //   const handleClick = Client.handleSave(data);
}

export { displaySearch };
