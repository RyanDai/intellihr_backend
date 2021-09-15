const jwt = require("jsonwebtoken");

function generateToken(userId) {
  return jwt.sign({ userId }, "KEY", { expiresIn: "1d" });
}
