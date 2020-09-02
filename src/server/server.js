const app = require("./index");

// Spin server
const port = 5005;
app.listen(process.env.PORT || port, () => {
  console.log(`Travel app running on port ${port}!`);
});
