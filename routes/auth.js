const express = require('express');
const { addingUser } = require('./handler/userPatient');
const router = express.Router();

router.post('/register',addingUser);

module.exports = router;