const {UserSchemaValidation,LoginSchemaValidation} = require('../../validation');

function validation(body, validate){
	const validation = validate(body).error;
	return validation;
}

const RegisterValidation = (req,res,next)=>{
	const body = req.body;
	const error = validation(body,UserSchemaValidation);

	if(!error){
		next();
	}
	else{
		res.send({
			status:'failed',
			message:error.details[0].message
		});
		res.status(400);
	}
};

const LoginValidation = (req,res,next)=>{
	const body = req.body;
	const error = validation(body,LoginSchemaValidation);

	if(!error){
		next();
	}
	else{
		res.send({
			status:'failed',
			message:error.details[0].message
		});
		res.status(400);
	}
};
module.exports = {RegisterValidation,LoginValidation};