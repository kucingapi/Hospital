const express = require('express');
const mongoose = require('mongoose');

// routes
const autentication = require('./routes/auth')
const appointment = require('./routes/appointment')
const patient = require('./routes/patient')

// variable
const env = require('dotenv').config();
const uri = process.env.uri || env.parsed.uri;
const app = express();
const port = process.env.PORT||3000;


async function startApp(){
	try{
		console.log(process.env.uri)
		app.use(express.json());
		// Routes
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
