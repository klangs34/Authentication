const mongoose  = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.Promise = Promise;

const createAccountSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

//add middleware to encrypt the password using a hook
createAccountSchema.pre('save', async function(next){
	try {
		if(!this.isModified('password')){
			return next();
		}
		let hashedPassword = await bcrypt.hash(this.password, 7);
		this.password = hashedPassword;
		return next();
	} catch (error) {
		return next(error);	
	}
});

//compare password
createAccountSchema.methods.comparePassword = async function(candidatePassword, next) {
	try {
		let isMatch = await bcrypt.compare(candidatePassword, this.password);
		return isMatch;

	} catch (error) {
		return next(error);
	}
}

const CreateAccount = mongoose.model('createAccount', createAccountSchema);

module.exports = CreateAccount;