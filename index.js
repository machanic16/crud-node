const app = require("./app");

const port = 3003;

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`Sucessfully conected to port ${port}`);
});
