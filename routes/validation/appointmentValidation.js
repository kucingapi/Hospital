const {AppointmentValidation, AppointmentUpdateValidation} = require('../../validation');

function validation(body, validate){
	const validation = validate(body).error;
	return validation;
}

const creatingAppointmentValidation = (req,res,next)=>{
	const body = req.body;
	const error = validation(body,AppointmentValidation);

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

const updatingAppointmentValidation = (req,res,next)=>{
	const body = req.body;
	const error = validation(body,AppointmentUpdateValidation);

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
module.exports = {creatingAppointmentValidation,updatingAppointmentValidation};