const mongoose = require('mongoose');
const members = require('./createAccount');

const memberProfileSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "members"
    },
    username: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    salutation: {
        type: String,
        required: true
    },
    occupation: String,
    email: {
        type: String,
        required: true
    }
});

const MemberProfile = mongoose.model('memberProfile', memberProfileSchema);

module.exports = MemberProfile;
