const User = require('../../models/User')
const Appointment = require('../../models/Appointment');

function isAppointmentExist(appointment,res){
	if(!appointment){
		return res.status(400).send({
				status:'failed',
				message:'appointment doesnt exist'
		});
	}
}

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
	const body = req.body;
	const appointment = await Appointment.findOne({_id:req.params._id}).catch((err) =>{
			res.status(400);
			res.send({
				status:'failed',
				message:'error',
				detail: err
			});
	});

	function changeAppointment(item,itemName){
		if(item){
			appointment[itemName] = item;
		}
	}

	if(isAppointmentExist(appointment,res)) return null;

	changeAppointment(body.name,'name');
	changeAppointment(body.description,'description');
	changeAppointment(body.registrants,'registrants');

	appointment.save()
		.then((result) =>{
			res.status(200);
			res.send({
				status:'success',
				message:'appointment updated successfully',
				detail: result
			});
		})
		.catch((err) =>{
			res.status(400);
			res.send({
				status:'failed',
				message:'appointment update is unsuccessfull',
				detail: err
			});
		})
}

const deletingAppointment = async (req,res) => {
	const id = req.params._id;
	const appointment = await Appointment.findOne({_id: id}).catch((err) => {
		res.status(400);
		res.send({
			status:'failed',
			message:'error',
			detail: err
		});
	});
	if(isAppointmentExist(appointment,res)) return null;
	const message = await Appointment.deleteOne({_id: id});

	res.send({
		status:'success',
		message:'appointment deleted successfully',
		detail: message
	});
}
const getAppointment = async (req,res) => {
	const id = req.params._id;
	const appointment = await Appointment.findOne({_id: id})
		.catch((err)=>{
			res.status(400).send({
				status:"failed",
				message:"the appointments id doesnt exist",
				error: err
			});
		});
	if(isAppointmentExist(appointment,res)) return null;
	res.send({
		status:'success',
		message:'appointment exist',
		registrants: appointment.registrants,
		detail: appointment
	});
}
module.exports = {creatingAppointment,updatingAppointment,deletingAppointment,getAppointment};