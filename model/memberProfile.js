const mongoose = require('mongoose');
const members = require('./createAccount');
mongoose.Promise = Promise;

const memberProfileSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "members"
    },
    username: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    salutation: {
        type: String
    },
    occupation: String
});

const MemberProfile = mongoose.model('memberProfile', memberProfileSchema);

module.exports = MemberProfile;
