const express = require("express");
const router = express.Router();
const submissionController = require("../controllers/submissionController");

//get all test submissions
router.get("/submissions", submissionController.all_submissions);

//post submission
router.post("/postSubmission", submissionController.post_submission);

module.exports = router;
