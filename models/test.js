const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testSchema = new Schema({
  Id: {
    type: Number,
    required: true,
  },
  Label: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  Required: {
    type: String,
    required: true,
  },
  Options: {
    type: Array,
    required: false,
  },
});

const Test = mongoose.model("Test", testSchema);

module.exports = Test;
