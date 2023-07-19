const models = require("../models");

const getAll = async (req, res) => {
  try {
    const [project] = await models.project.findAll();
    if (!project.length) return res.status(404).send("No existing projects");
    return res.json(project);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when retrieving projects from database");
  }
};

const getById = async (req, res) => {
  try {
    const [[project]] = await models.project.findById(req.params.id);
    if (!project) res.status(404).send("Project not found");
    res.json(project);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("oops...an error occured when retrieving project from database");
  }
};

const editById = async (req, res) => {
  try {
    const [result] = await models.project.update(req.body, req.params.id);

    if (result.affectedRows === 0) {
      return res.status(404).send(`Project not found`);
    }
    return res.status(200).json({ insertId: result.insertId });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when updating project from database");
  }
};

const post = async (req, res) => {
  try {
    const [result] = await models.project.create(req.body);
    res.status(200).json({ insertId: result.insertId });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("oops...an error occured when updating project from database");
  }
};

const remove = async (req, res) => {
  try {
    const [result] = await models.project.delete(req.params.id);
    if (result.affectedRows === 0)
      return res.status(404).send(`Project not found`);
    return res.sendStatus(204);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("oops...an error occured when removing project from database");
  }
};

module.exports = { getAll, getById, editById, post, remove };
