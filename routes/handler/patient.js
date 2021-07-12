const Appointment = require('../../models/Appointment')

const getAppointments = async (req,res) => {
	const user = req.user;
	const appointments = await Appointment.find({registrants: user._id})
		.catch((err)=>{
			res.send({
				status:"failed",
				message:"the appointments id doesnt exist",
				error: err
			});
		});
	res.status(200).send({
		status:'success',
		appointments: appointments
	});
}

const applyAppointments = async (req,res) => {
	const MAX_PATIENT = 20;
	const id = req.params.id;
	const user = req.user;

	const appointment = await Appointment.findOne({_id:id})
		.catch((err)=>{
			res.status(404).send({
				status:"failed",
				message:"the appointments id doesnt exist",
				error: err
			});
		});
	const currentPatient = appointment.registrants.length;
	if((appointment.registrants).includes(user._id)){
		return res.status(403).send({
			status:"failed",
			message:"the account already enroll in the appointment"
		});
	}
	if(currentPatient >= MAX_PATIENT){
		return res.status(406).send({
			status:"failed",
			message:"the appointments has too much patient"
		});
	}
	appointment.registrants.push(user._id);
	
	appointment.save()
		.then((result) =>{
			res.status(200);
			res.send({
				status:'success',
				message:'user added to the list ',
				detail: 
				{id:result.id,
				email:result.email}
			});
		})
		.catch((err) =>{
			res.status(400);
			res.send({
				status:'failed',
				message:'data base error',
				detail: err
			});
		})
}

const cancelAppointment = async (req,res) => {
	const id = req.params.id;
	const user = req.user;

	const appointment = await Appointment.findOne({_id:id})
		.catch((err)=>{
			res.status(404).send({
				status:"failed",
				message:"the appointments id doesnt exist",
				error: err
			});
		});
	if(!appointment.registrants.includes(user._id)){
		return res.status(304).send({
			status:"failed",
			message:"the appointments id doesnt exist in the appointment"
		});
	}
	appointment.registrants.pull(user._id);
	
	appointment.save()
		.then(() =>{
			res.status(200);
			res.send({
				status:'success',
				message:'user has been romove from the list ',
			});
		})
		.catch((err) =>{
			res.status(400);
			res.send({
				status:'failed',
				message:'data base error',
				detail: err
			});
		})
}

module.exports = {getAppointments,applyAppointments,cancelAppointment};