const Joi = require("joi");

const userSchema = Joi.object({
  email: Joi.string().email().max(150).required(),
  password: Joi.string().max(255).required(),
  userTypeId: [Joi.number().integer().required(), Joi.allow(null)],
});

const validateUserInfo = (req, res, next) => {
  const { email, password, user_type_id: userTypeId } = req.body;

  const { error } = userSchema.validate(
    { email, password, userTypeId },
    { abortEarly: false }
  );

  if (error) return res.status(422).json({ validationErrors: error.details });

  return next();
};

module.exports = validateUserInfo;
