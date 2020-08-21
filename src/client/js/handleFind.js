// Function that posts the trip details to our server, expects the
// fetched data back and passes it as input to call displaySearch

// to be called by the find submit button of the travel-details form

const handleFind = (event) => {
  event.preventDefault();
  alert("I've been clicked");
};

export { handleFind };
