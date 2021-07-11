const User = require('../../models/User');
const hashingPassword = require('./hashingPassword');


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
				message:'Username Has been taken',
				detail: err
			});
		})
}

module.exports = {addingUser};