const models = require("../models");

const getAll = async (req, res) => {
  try {
    const [videoCategories] = await models.videoCategory.findAll();
    if (!videoCategories.length)
      return res
        .status(404)
        .send(
          "No result matched the requested filter. Please check your query and try again"
        );
    return res.json(videoCategories);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send(
        "oops...an error occured when retrieving project-techno from database"
      );
  }
};

const post = async (req, res) => {
  try {
    await models.videoCategory.create(req.body);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send(
        "oops...an error occured when updating project-techno from database"
      );
  }
};

const remove = async (req, res) => {
  try {
    const [result] = await models.videoCategory.deleteFromVideoId(
      req.params.id
    );
    if (result.affectedRows === 0)
      return res.status(404).send(`Project-techno not found`);
    return res.sendStatus(204);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send(
        "oops...an error occured when removing project-techno from database"
      );
  }
};

module.exports = { getAll, post, remove };
