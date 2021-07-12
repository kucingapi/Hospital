const express = require('express');
const {getAppointments, applyAppointments} = require('./handler/patient');
const { auth } = require('./handler/user');
// const {RegisterValidation, LoginValidation} = require('./validation/userValidation');

const router = express.Router();

router.use(auth);
router.get('/appointment',getAppointments);
router.post('/appointment/:id',applyAppointments);

module.exports = router;