//// FUNCTION NOW REDUNDANTANT >> BEEN CHANGED TO displaySearch

function updateUI(data) {
  //Clear UI
  const results = document.getElementById("search-results");
  results.innerHTML = "";
  results.style.display = "block";

  let resultsHTML;
  //   if (!data.error) {
  const weatherImgSrc = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;
  resultsHTML = `
                  <img src="${data.cityImgSrc}">
                  <div class="card">
                  <h1>${data.city}</h1>
                  <img src="${weatherImgSrc}">
                  <p>${data.temp} °C with ${data.description}</p>
                  <button type="submit" id="save">Log trip</button>
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
  const saveTrip = document.selectElementByID("save");
  saveTrip.addEventListener(click, Client.handleSave(data));
}

export { updateUI };
