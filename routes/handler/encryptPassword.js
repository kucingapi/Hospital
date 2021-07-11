const bcrypt = require('bcryptjs');

const hashingPassword= async (password) =>{
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password,salt);

	return hashedPassword;
}

const passwordValidation = async (payloadPass, userPass) => {
	return await bcrypt.compare(payloadPass,userPass);
}

module.exports = {hashingPassword, passwordValidation};