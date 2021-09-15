const Test = require("../models/test");

const all_tests = (req, res) => {
  Test.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  all_tests,
};
