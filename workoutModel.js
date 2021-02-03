const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  //Example - Change these out!!

  // CODE HERE
  username: {
    type: String,
    trim: true,
    required: "String is Required",
  },
  password: {
    type: String,
    trim: true,
    required: true,
    validate: [
      ({ length }) => length >= 6,
      "Password must be at least 6 characters.",
    ],
  },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    unique: true,
  },
  userCreated: {
    type: Date,
    default: Date.now,
  },
  //End example
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
