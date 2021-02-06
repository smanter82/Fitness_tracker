const app = require("express").Router();
const db = require("../models/");
const mongoose = require("mongoose");

app.get("/api/workouts", (req, res) => {
  db.Workout.find({}).then((dbWorkout) => {
    res.json(dbWorkout);
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

app.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body } },
    { new: true }
  )
    .then((dbWorkout) => {
      //Look up exercise by id and add to workout
      return res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

app.post("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = app;
