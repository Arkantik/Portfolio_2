const Joi = require("joi");

const imageSchema = Joi.object({
  originalname: Joi.string()
    .regex(/([A-z0-9:-_./]+)?.(png|jpg|jpeg|webp|svg)$/i)
    .max(255)
    .required(),
});

const validateImageInfo = (req, res, next) => {
  if (!req.file)
    return res.status(400).send("Bad request. File cannot be empty...");

  const { originalname } = req.file;

  const { error } = imageSchema.validate(
    { originalname },
    { abortEarly: false }
  );

  if (error) return res.status(422).json({ validationErrors: error.details });

  return next();
};

module.exports = validateImageInfo;
