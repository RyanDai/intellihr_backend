const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const userRoutes = require("./routes/userRoutes");
const testRoutes = require("./routes/testRoutes");
const submissionRoutes = require("./routes/submissionRoutes");
const loginRoutes = require("./routes/loginRoutes");

const app = express();

//Connect to Mongodb
const dbURI =
  "mongodb+srv://Manager:test123@intellihr.6rffu.mongodb.net/Tests-management-system?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((result) => app.listen(5000))
  .catch((err) => console.log(err));

app.use(morgan("dev"));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(loginRoutes);
app.use(userRoutes);
app.use(testRoutes);
app.use(submissionRoutes);
