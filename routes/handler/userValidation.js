
const {UserSchemaValidation} = require('../../validation');

function validation(body, validate){
	const validation = validate(body).error;
	return validation;
}

const UserValidation = (req,res,next)=>{
	const body = req.body;
	const validate = validation(body,UserSchemaValidation);

	if(!validate){
		next();
	}
	else{
		res.send({
			status:'failed',
			message:validate.details[0].message
		});
		res.status(400);
	}
};

module.exports = UserValidation;