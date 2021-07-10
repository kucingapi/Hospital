const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
	'_id':{
		type:String,
		required:true
	},
	email:{
		type: String,
		required: true
	},
	first_name:{
		type: String,
		required: true
	},
	first_name:{
		type: String,
		required: true
	},
	age:{
		type: Number,
		required: true
	},
	password:{
		type: String,
		required: true
	},
	roles:{
		type: String,
		required: true
	}
});

const User = mongoose.model('User',UserSchema);

module.exports = User;