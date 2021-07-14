const Joi = require('@hapi/joi');

const UserSchemaValidation = (body) => {
	const validateUser = Joi.object({
		username: Joi.string().min(3).required(),
		email: Joi.string().min(6).required().email(),
		first_name: Joi.string().min(2).required(),
		last_name: Joi.string().required(),
		age: Joi.number().required(),
		password: Joi.string().min(5).required()
	});
	const validation = validateUser.validate(body) 

	return validation;
}

const LoginSchemaValidation = (body) => {
	console.log(body);
	const validateUser = Joi.object({
		username: Joi.string().min(3).required(),
		password: Joi.string().min(5).required()
	});
	const validation = validateUser.validate(body) 

	return validation;
}
const AppointmentValidation = (body) => {
	const validateUser = Joi.object({
		name: Joi.string().min(2).required(),
		description: Joi.string().min(10).required()
	});
	const validation = validateUser.validate(body) 

	return validation;
}

const AppointmentUpdateValidation = (body) => {
	const validateUser = Joi.object({
		name: Joi.string().min(2),
		description: Joi.string().min(10),
		registrants: Joi.array().items(Joi.string())
	});
	const validation = validateUser.validate(body) 

	return validation;
}
module.exports = {UserSchemaValidation,
				  LoginSchemaValidation,
				  AppointmentValidation,
				  AppointmentUpdateValidation};
