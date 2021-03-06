const express = require('express');
const { auth } = require('./handler/user');
const {creatingAppointment, 
	   updatingAppointment, 
	   deletingAppointment,
	   getAppointment} = require('./handler/appointment');

const {creatingAppointmentValidation,
	   updatingAppointmentValidation} = require('./validation/appointmentValidation');
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
router.post('/',creatingAppointmentValidation,creatingAppointment);
router.put('/:_id',updatingAppointmentValidation,updatingAppointment);
router.delete('/:_id',deletingAppointment);
router.get('/:_id',getAppointment);

module.exports = router;