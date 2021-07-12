const express = require('express');
const {getAppointments,
	   applyAppointments,
	   cancelAppointment} = require('./handler/patient');
const { auth } = require('./handler/user');
// const {RegisterValidation, LoginValidation} = require('./validation/userValidation');

const router = express.Router();

router.use(auth);
router.get('/appointment',getAppointments);
router.post('/appointment/:id',applyAppointments);
router.delete('/appointment/:id',cancelAppointment);

module.exports = router;