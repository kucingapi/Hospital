const Joi = require('@hapi/joi');

const UserSchemaValidation = (body) => {
	const validateUser = Joi.object({
		username: Joi.string().min(3).required(),
		email: Joi.string().min(6).required().email(),
		first_name: Joi.string().min(2).required(),
		last_name: Joi.string().required(),
		age: Joi.number().required(),
		password: Joi.string().min(5).required(),
	});
	const validation = validateUser.validate(body) 

	return validation;
}

module.exports = {UserSchemaValidation};
