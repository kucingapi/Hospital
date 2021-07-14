const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');
const Appointment = require('./models/Appointment');

// routes
const autentication = require('./routes/auth');
const appointment = require('./routes/appointment');
const patient = require('./routes/patient');

// variable
const env = require('dotenv').config();
const uri = process.env.uri || env.parsed.uri;
const app = express();
const port = process.env.PORT||2999;


async function startApp(){
	try{
		app.use(express.json());
		app.use(cors({
			origin:'*'
		}));

		// Routes
		app.get('/',(req,res)=>{
			res.send({message:'this is home'})
		})
		app.get('/checkHealth',async (req,res)=>{
			try{
				const userDatabase = await User.findOne();
				const appointmentDatabase= await Appointment.findOne();
				res.status(200)
				.send({
					user: userDatabase,
					appointment: appointmentDatabase
				})
			}
			catch(err){
				res.status(400)
				.send({
					message: "database error",
					error:err
				})
			}
		})
		app.use('/auth',autentication);
		app.use('/admin/appointment',appointment);
		app.use('/dashboard',patient);
		// Mongoose
		mongoose.set('useNewUrlParser', true);
		mongoose.set('useFindAndModify', false);
		mongoose.set('useCreateIndex', true);
		mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true },()=>{
			console.log("data base connected");
		});

		app.listen(port, () =>{
			console.log(`http://localhost:${port}`);
		});
	}
	catch(err){
		console.log(err);
		// startApp();
	}
}
startApp();
