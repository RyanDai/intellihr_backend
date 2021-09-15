const express = require("express");
const router = express.Router();
const testController = require("../controllers/testController");

//get all test questions
router.get("/tests", testController.all_tests);

module.exports = router;
