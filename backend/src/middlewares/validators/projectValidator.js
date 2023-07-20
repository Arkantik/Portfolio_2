const Joi = require("joi");
const fs = require("node:fs");

const projectSchema = Joi.object({
  name: Joi.string().max(255).required(),
  description: Joi.string().max(255).required(),
  img: Joi.string()
    .regex(/([.{0,2}/]+)?([A-z0-9-_./]+)?.(png|jpg|jpeg|webp|svg)$/i)
    .max(255)
    .required(),
  github: [Joi.string().max(255), Joi.allow(null)],
  website: [Joi.string().max(255), Joi.allow(null)],
  tool: [Joi.string().max(255), Joi.allow(null)],
});

const validateProjectInfo = (req, res, next) => {
  // const { name, description, img, github, website, tool } = req.body;

  const { project_name: name, description, github, website, tool } = req.body;
  req.body.name = name;
  const { originalname: img, destination } = req.file;
  req.body.img = img;
  console.info({ img });

  const { error } = projectSchema.validate(
    {
      name,
      description,
      img,
      github,
      website,
      tool,
    },
    { abortEarly: false }
  );

  if (error) return res.status(422).json({ validationErrors: error.details });

  fs.rename(
    `${destination}/${req.file.filename}`,
    `${destination}/${img}`,
    (err) => {
      if (err) throw err;
    }
  );

  return next();
};

module.exports = validateProjectInfo;
