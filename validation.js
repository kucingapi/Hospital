const Joi = require('@hapi/joi');

const UserSchemaValidation = (body) => {
	const validate = {
		_id: Joi.string().min(3).required(),
		email: Joi.string().min(6).required(),
		first_name: Joi.string().min(2).required(),
		last_name: Joi.string().required(),
		age: Joi.number().required(),
		password: Joi.string().required(),
	}	
	const {error} = Joi.validate(body,validate)

	return 
}