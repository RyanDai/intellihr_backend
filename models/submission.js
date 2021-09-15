const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const responseSchema = new Schema({
  questionId: {
    type: String,
    required: true,
  },
  value: { type: String, required: true },
});

const submissionSchema = new Schema({
  currentUsername: {
    type: String,
    required: true,
  },
  responses: [responseSchema],
});

const Submission = mongoose.model("Submission", submissionSchema);

module.exports = Submission;
