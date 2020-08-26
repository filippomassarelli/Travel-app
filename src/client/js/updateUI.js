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
}

export { updateUI };
