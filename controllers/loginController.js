const { generateToken } = require("../utils");
const User = require("../models/user");

const login = async (req, res) => {
  const isDefined = req.body.username && req.body.password;

  if (!isDefined)
    return res.status(400).send({ error: "username/password not defined" });

  const { username, password } = req.body;
  console.log("okok:", username, password);
  const user = await User.findOne({ userName: username }).exec();
  console.log(user);

  if (!user) return res.status(400).send({ error: "username not found" });

  console.log("pwd", user.password, password);
  if (user.password !== password)
    return res.status(401).send({ error: "password not correct" });

  return res.status(200).send(user);
};

module.exports = {
  login,
};
