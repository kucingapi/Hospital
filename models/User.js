const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
	_id:String,
	email:{
		type: String,
		unique:true,
		required: true,
		min:6
	},
	first_name:{
		type: String,
		required: true,
		min:2
	},
	last_name:{
		type: String,
		required: true
	},
	age:{
		type: Number,
		required: true
	},
	password:{
		type: String,
		required: true,
		min: 5
	},
	roles:{
		type: String,
		required: true
	}
});

const User = mongoose.model('User',UserSchema);

module.exports = User;