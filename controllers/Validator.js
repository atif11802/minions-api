const Joi = require("joi");

const minionValidator = Joi.object({
	name: Joi.string().required(),
	age: Joi.number().required(),
	color: Joi.string().required(),
});

module.exports = {
	minionValidator,
};
