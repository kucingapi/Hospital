const express = require('express');
const { addingUser, loginUser } = require('./handler/userPatient');
const {RegisterValidation, LoginValidation} = require('./handler/userValidation');
const router = express.Router();


router.post('/register',RegisterValidation,addingUser);
router.post('/login',LoginValidation,loginUser);

module.exports = router;