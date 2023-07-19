const Joi = require("joi");

const technoSchema = Joi.object({
  name: Joi.string().max(50).required(),
  img: Joi.string()
    .regex(/([.{0,2}/]+)?([A-z0-9-_./]+)?.(png|jpg|jpeg|webp|svg)$/i)
    .max(255)
    .required(),
});

const validateTechnoInfo = (req, res, next) => {
  const { name, thumbnail } = req.body;

  const { error } = technoSchema.validate(
    { name, thumbnail },
    { abortEarly: false }
  );

  if (error) return res.status(422).json({ validationErrors: error.details });

  return next();
};

module.exports = validateTechnoInfo;
