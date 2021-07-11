const mongoose = require('mongoose');
const User = require('../../models/User');
const {hashingPassword, passwordValidation} = require('./encryptPassword');


const addingUser = async (req,res) => {
	const body = req.body;
	const newUser = new User({
		_id: body.username,
		email: body.email,
		first_name: body.first_name,
		last_name: body.last_name,
		age: body.age,
		password: await hashingPassword(body.password),
		roles:'User'
	});

	newUser.save()
		.then((result) =>{
			res.status(200);
			res.send({
				status:'success',
				message:'user created successfully',
				detail: 
				{id:result.id,
				email:result.email}
			});
		})
		.catch((err) =>{
			res.status(400);
			res.send({
				status:'failed',
				message:'username/email Has been taken',
				detail: err
			});
		})
}

const loginUser = async (req,res) => {
	const body = req.body;
	const user = await User.findOne({id:body.id});
	if(!user){
		res.send({
			status:'failed',
			message:'username does not exist',
		})
		res.status(400);
		return null;
	}
	const isPasswordValid = await passwordValidation(body.password,user.password);

	if(isPasswordValid){
		res.send({
			status:'successfull login',
			message: 'you are logged in'
		});
		res.status(200);
		return null;
	}

	res.send({
		status:'failed',
		message:'password is invalid',
	})
	res.status(403);
}

module.exports = {addingUser,loginUser};