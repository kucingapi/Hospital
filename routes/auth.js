const express = require('express');
const { addingUser } = require('./handler/userPatient');
const userValidation = require('./handler/userValidation');
const router = express.Router();


router.post('/register',userValidation,addingUser);

module.exports = router;