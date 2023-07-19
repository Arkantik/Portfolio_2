const Joi = require("joi");

const userSchema = Joi.object({
  email: Joi.string().email().max(150).required(),
  password: Joi.string().max(255).required(),
  is_admin: [Joi.number().integer(), Joi.allow(null)],
});

const validateUserInfo = (req, res, next) => {
  const { email, password, is_admin: admin } = req.body;

  const { error } = userSchema.validate(
    { email, password, admin },
    { abortEarly: false }
  );

  if (error) return res.status(422).json({ validationErrors: error.details });

  return next();
};

module.exports = validateUserInfo;
