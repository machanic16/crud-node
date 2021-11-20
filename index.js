const app = require("./app");
const mongoose = require("mongoose");

const port = 4000;
const mongooseUrl = "mongodb://localhost/crud-papaya";

/*mongoose.connect(mongooseUrl, (error) => {
  if (!error) {
    console.log("Connected correctly to db.");
    app.listen(port, (error) => {
      if (error) {
        console.log(error);
      }
      console.log(`Sucessfully conected to port ${port}`);
    });
  } else {
    console.log(error);
    console.log("Error stablishing connection with db.");
  }
}); */

mongoose
  .connect(mongooseUrl)
  .then((db) => console.log("Db connected"))
  .catch((err) => console.log(err));

app.set("port", process.env.PORT || port);

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
