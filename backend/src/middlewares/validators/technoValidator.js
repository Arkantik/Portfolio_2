const Joi = require("joi");
const fs = require("node:fs");

const technoSchema = Joi.object({
  name: Joi.string().max(50).required(),
  img: Joi.string()
    .regex(/([.{0,2}/]+)?([A-z0-9-_./]+)?.(png|jpg|jpeg|webp|svg)$/i)
    .max(255)
    .required(),
});

const validateTechnoInfo = (req, res, next) => {
  const { techno_name: name } = req.body;
  req.body.name = name;
  const { originalname: img, destination } = req.file;
  req.body.img = img;

  const { error } = technoSchema.validate({ name, img }, { abortEarly: false });

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

module.exports = validateTechnoInfo;
