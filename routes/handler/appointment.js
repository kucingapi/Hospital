
const Appointment = require('../../models/Appointment');

const creatingAppointment = async (req,res) => {
	// console.log(req.user.roles);
	const body = req.body;
	const newAppointment = new Appointment({
		name: body.name,
		description: body.description,
		registrants:[]
	});

	newAppointment.save()
		.then((result) =>{
			res.status(200);
			res.send({
				status:'success',
				message:'appointment created successfully',
				detail: result
			});
		})
		.catch((err) =>{
			res.status(400);
			res.send({
				status:'failed',
				message:'error',
				detail: err
			});
		})
}

const updatingAppointment = async (req,res) => {
	
}

module.exports = {creatingAppointment};