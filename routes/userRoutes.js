const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

//get all users
router.get("/users", userController.all_users);

//register new subjects
router.get("/add-user", (req, res) => {
  const user = new User({
    subjectId: "testUser1",
    password: "testUser1",
    role: "subject",
    userName: "tester",
    testChamber: 1,
    alive: true,
  });

  user
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

//login
router.get("/login", userController.login);

module.exports = router;
