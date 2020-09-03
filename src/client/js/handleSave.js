function handleSave(savedData) {
  //Send post request to server and use response to updateUI
  console.log("handleSave running");
  Client.postData("http://localhost:5005/save", savedData).then((saveLog) => {
    Client.displayLog(saveLog);
  });
  //Clear UI
  const results = document.getElementById("search-results");
  results.innerHTML = "";
  results.style.display = "block";
}

export { handleSave };
