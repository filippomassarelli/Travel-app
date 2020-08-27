function handleSave(savedData) {
  //identify user input
  //   const departureCity = document.getElementById("departure").value;
  //   const destinationCity = document.getElementById("destination").value;
  //   const departureDate = document.getElementById("date").value;
  //   const userInput = { departureCity, destinationCity, departureDate };

  //Send post request to server and use response to updateUI
  Client.postData("/save", saveData).then((saveLog) => {
    Client.displayLog(saveLog);
  });
}

export { handleSave };
