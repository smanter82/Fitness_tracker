const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//replace with database name
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
});

// db.on("error", (error) => {
//   console.log("Database Error:", error);
// });

db.Workout.create({})
  .then((dbworkout) => {
    console.log(dbworkout);
  })
  .catch(({ message }) => {
    console.log(message);
  });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname + "./public/index.html"));
// });
// //Don't forget to change these!
// app.get("/all", (req, res) => {
//   db.workouts.find({}, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(data);
//     }
//   });
// });

// //Add routes

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
