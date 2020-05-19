const mongoose = require('mongoose');
const members = require('./createAccount');

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
    occupation: String,
    email: {
        type: String,
        required: true
    }
});

const MemberProfile = mongoose.model('memberProfile', memberProfileSchema);

module.exports = MemberProfile;
