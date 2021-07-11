const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const DoctorApointmentSchema = new Schema({
	name:{
		type: String,
		required: true,
		min:2
	},
	description:{
		type: String,
		required: true,
		min: 10
	},
	registrants: [String]
});

const DoctorApointment = mongoose.model('Doctor Apointment',DoctorApointmentSchema);

module.exports = DoctorApointment;