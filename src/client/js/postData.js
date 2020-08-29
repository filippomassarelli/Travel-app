const postData = async (passedUrl, passedData) => {
  console.log("postData is running");
  const request = await fetch(passedUrl, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(passedData),
  });
  try {
    const data = await request.json();
    return data;
  } catch (error) {
    return { error: error };
  }
};

export { postData };
