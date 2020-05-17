const mongoose  = require('mongoose');

const createAccountSchema = mongoose.Schema({
    username: {
        type: String,
        required
    },
    email: {
        type: String,
        required
    }
});

const CreateAccount = mongoose.model('createAccount', createAccountSchema);

module.exports = CreateAccount;