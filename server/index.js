const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/routes");
// require("dotenv").config();

// dotenv.config();
const port = process.env.PORT || 2000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({
    message: "Welcome to Indian Railways",
    
  });
});

app.use("/", router);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

module.exports = app;
