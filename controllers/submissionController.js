const Submission = require("../models/submission");

const all_submissions = (req, res) => {
  Submission.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const post_submission = (req, res) => {
  //console.log(req.body);
  const currentUsername = req.body.currentUsername;
  const submissionsArray = req.body.submissions;

  const responses = [];
  submissionsArray.map((submission) => {
    questionId = submission[0];
    value = submission[1];
    responses.push({
      questionId,
      value,
    });
  });

  const submission = new Submission({
    currentUsername: currentUsername,
    responses: responses,
  });

  submission
    .save()
    .then(() => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  all_submissions,
  post_submission,
};
