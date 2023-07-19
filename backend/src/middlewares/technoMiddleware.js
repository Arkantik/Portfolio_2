const models = require("../models");

const checkForExistingTechno = async (req, res, next) => {
  try {
    if (!Object.keys(req.body).length)
      return res.status(400).send("Bad request. Body cannot be empty...");

    const [techno] = await models.game.findAll();

    if (!techno.length) return res.status(404).send("No techno found");

    const match = techno.find(
      (game) => game.name.toLowerCase() === req.body.name.toLowerCase()
    );

    if (match) return res.status(409).send("Techno already exists!");

    return next();
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send(
        "oops...an error occured when checking for already existing techno..."
      );
  }
};

module.exports = checkForExistingTechno;
