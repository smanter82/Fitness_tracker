const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Type is Required",
      },
      name: {
        type: String,
        trim: true,
        required: "Name is Required",
      },
      duration: {
        type: Number,
        trim: true,
        required: "Duration is Required",
        min: 1,
      },
      distance: {
        type: Number,
        trim: true,
        min: 1,
      },
      weight: {
        type: Number,
        trim: true,
        min: 1,
      },
      reps: {
        type: Number,
        trim: true,
        min: 1,
      },
      sets: {
        type: Number,
        trim: true,
        min: 1,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
