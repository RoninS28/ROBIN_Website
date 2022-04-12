const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./Routes");

const app = express();
const PORT = process.env.PORT || 8080;

//connection to database

mongoose
  .connect(
    "mongodb+srv://admin:robinadmin@cluster0.5nash.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => console.log("Connection successful"));

app.use(cors());
// HTTP request logger
app.use(morgan("tiny"));
app.use(express.json());
app.use("/api/factory-worker", routes);
app.listen(PORT, console.log(`Server is starting at ${PORT}`));
