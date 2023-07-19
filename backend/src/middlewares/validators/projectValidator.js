// eslint-disable-next-line import/no-extraneous-dependencies
const Joi = require("joi");

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
  const { name, description, img, github, website, tool } = req.body;

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

  return next();
};

module.exports = validateProjectInfo;
