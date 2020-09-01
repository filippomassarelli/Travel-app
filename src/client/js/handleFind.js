// Function that posts the trip details to our server, expects the
// fetched data back and passes it as input to call displaySearch

// to be called by the find submit button of the travel-details form

const handleFind = (event) => {
  event.preventDefault();

  //identify user input
  const destinationCity = document.getElementById("destination").value;
  const departureDate = document.getElementById("date").value;
  const userInput = { destinationCity, departureDate };

  //Send post request to server and use response to updateUI
  Client.postData("/find", userInput).then((data) => {
    Client.displaySearch(data);
  });

  //Scroll to search result
  document.getElementById("search-results").scrollIntoView({
    behavior: "smooth",
  });
};

export { handleFind };
