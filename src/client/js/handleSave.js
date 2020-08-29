function handleSave(savedData) {
  //Send post request to server and use response to updateUI
  console.log("handleSave running");
  Client.postData("/save", savedData).then((saveLog) => {
    Client.displayLog(saveLog);
  });
}

export { handleSave };
