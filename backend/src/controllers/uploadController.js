const fs = require("node:fs");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const FRONT_DEST = `http://localhost:${process.env.APP_PORT}/`;

const post = (req, res) => {
  // extract file destination (backend location)
  const { destination } = req.file;
  const fileDestination = destination.slice(destination.search("uploads"));

  const { filename, originalname } = req.file;
  const oldfileName = filename;
  const newfileName = `${uuidv4()}-${originalname}`;

  // renaming
  fs.rename(
    `./public/${fileDestination}${oldfileName}`,
    `./public/${fileDestination}${newfileName}`,
    (err) => {
      if (err) throw err;
      res.json({
        url_file: `${FRONT_DEST}${fileDestination}${newfileName}`,
      });
    }
  );
};

module.exports = { post };
