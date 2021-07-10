const express = require('express');
const {connect} = require('mongoose');

const env = require('dotenv').config();
const uri = env.parsed.uri;
const app = express();
const port = 3000;


async function startApp(){
	try{
		app.use(express.json());

		const db = await connect(uri,{useFindAndModify:true,useUnifiedTopology:true,useNewUrlParser:true}).then(()=>{
			console.log('databse connected');
		});
		app.listen(port, () =>{
			console.log(`http://localhost:${port}`);
		});
	}
	catch(err){
		console.log(err);
		startApp();
	}
}
startApp();
