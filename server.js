const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const connectDB = require("./config");

const PORT = process.env.PORT || 3030;

const db = require("./models");

const app = express();

connectDB(app);

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/apiRoutes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
