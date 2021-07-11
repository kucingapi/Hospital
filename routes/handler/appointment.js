const User = require('../../models/User')
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
	const body = req.body;
	const appointment = await Appointment.findOne({_id:req.params._id});

	function changeAppointment(item,itemName){
		if(item){
			appointment[itemName] = item;
		}
	}

	if(!appointment){
		return res.status(400).send({
				status:'failed',
				message:'user doesnt exist'
		});
	}
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

module.exports = {creatingAppointment,updatingAppointment};