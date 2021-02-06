const app = require("express").Router();
const db = require("../models/");
const mongoose = require("mongoose");

app.get("/api/workouts", (req, res) => {
  db.Workout.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      return res.json(data);
    }
  });
});

app.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//update by adding excercise id to workouts

app.put("/api/workouts", (req, res) => {
  db.Workout.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      //Look up exercise by id and add to workout
      return res.json(data);
    }
  });
});

module.exports = app;
