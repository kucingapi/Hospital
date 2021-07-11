const express = require('express');
const { auth } = require('./handler/user');
const {creatingAppointment} = require('./handler/appointment');

const {creatingAppointmentValidation} = require('./validation/appointmentValidation');
const router = express.Router();

function userIsAnAdmin(req,res,next){
	if(req.user.roles !== 'admin'){
		return res.status(403).send({
				status:'failed',
				message:'Does not have access'
			});
	}
	next();
}

router.use(auth);
router.use(userIsAnAdmin);
router.post('/create',creatingAppointmentValidation,creatingAppointment);

module.exports = router;