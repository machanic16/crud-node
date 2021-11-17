const app = require("./app");
const mongoose = require("mongoose");

const port = 3003;
const mongooseUrl = "mongodb://localhost:27017/devant";

mongoose.connect(
  mongooseUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  },
  (error) => {
    if (!error) {
      console.log("Connected correctly to db.");
      app.listen(port, (error) => {
        if (error) {
          console.log(error);
        }
        console.log(`Sucessfully conected to port ${port}`);
      });
    } else {
      console.log("Error stablishing connection with db.");
    }
  }
);
