const models = require("../models");

const getAll = async (req, res) => {
  try {
    const [users] = await models.user.findAll();
    if (!users.length) return res.status(404).send("No existing users");
    return res.json(users);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when retrieving users from database");
  }
};

const getById = async (req, res) => {
  try {
    const [[user]] = await models.user.find(req.params.id);
    if (!user) return res.status(404).send("User not found");
    return res.json(user);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when retrieving user from database");
  }
};

module.exports = { getAll, getById };
