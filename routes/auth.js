const express = require('express');
const { addingUser, loginUser, auth } = require('./handler/userPatient');
const {RegisterValidation, LoginValidation} = require('./handler/userValidation');
const router = express.Router();


router.post('/register',RegisterValidation,addingUser);
router.post('/login',LoginValidation,loginUser);
router.post('/test',auth);

module.exports = router;