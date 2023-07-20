const models = require("../models");

const getAll = async (req, res) => {
  try {
    const [techno] = await models.techno.findAll();
    if (!techno.length) return res.status(404).send("No existing technos");
    return res.json(techno);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when retrieving technos from database");
  }
};

const editById = async (req, res) => {
  try {
    const [result] = await models.techno.update(req.body, req.params.id);
    if (result.affectedRows === 0) {
      return res.status(404).send(`Techno not found`);
    }
    return res.sendStatus(204);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when updating techno from database");
  }
};

const post = async (req, res) => {
  try {
    await models.techno.create(req.body);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("oops...an error occured when registering techno from database");
  }
};

const remove = async (req, res) => {
  try {
    const [result] = await models.techno.delete(req.params.id);
    if (result.affectedRows === 0)
      return res.status(404).send(`Techno not found`);
    return res.sendStatus(204);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when removing techno from database");
  }
};

module.exports = { getAll, editById, post, remove };
