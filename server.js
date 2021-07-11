const express = require('express');
const mongoose = require('mongoose');

// routes
const autentication = require('./routes/auth')

// variable
const env = require('dotenv').config();
const uri = env.parsed.uri;
const app = express();
const port = 3000;


async function startApp(){
	try{
		app.use(express.json());
		app.use('/auth',autentication);
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
