const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  subjectId: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  testChamber: {
    type: Number,
    required: false,
  },
  DateOfBirth: {
    type: String,
    required: false,
  },
  totalScore: {
    type: Number,
    required: false,
  },
  alive: {
    type: Boolean,
    required: false,
  },
});

const User = mongoose.model("User", usersSchema);

module.exports = User;
