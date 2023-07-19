const argon2 = require("argon2");
const models = require("../models");

const verifyEmail = async (req, res, next) => {
  try {
    if (!Object.keys(req.body).length)
      return res.status(400).send("Bad request. Body cannot be empty...");

    const [[user]] = await models.user.findByEmail(req.body.email);

    if (!user)
      return res
        .status(401)
        .send(
          "Not account found! Please verify your email address or make sure to sign up..."
        );
    req.user = user;
    return next();
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send(
        "oops...an error occured when retrieving user's email from database"
      );
  }
};

const verifyPassword = async (req, res, next) => {
  try {
    const isUserVerified = await argon2.verify(
      req.user.password,
      req.body.password
    );

    if (!isUserVerified)
      return res
        .status(401)
        .send("Your email and password do not match. Please try again.");

    return next();
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured during user's password verification...");
  }
};

const hashPassword = async (req, res, next) => {
  const hashingOptions = {
    type: argon2.argon2id,
    memoryCost: 2 ** 14.28,
    timeCost: 2,
    parallelism: 1,
  };

  const { password } = req.body;

  try {
    const hashedPassword = await argon2.hash(password, hashingOptions);
    // swap clear password with hashed password
    delete req.body.password;
    req.body.password = hashedPassword;
    next();
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("oops... an error occured when hashing user's password");
  }
};

module.exports = {
  verifyEmail,
  verifyPassword,
  hashPassword,
};
