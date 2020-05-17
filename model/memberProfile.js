const mongoose = require('mongoose');
const members = require('./createAccount');

const memberProfileSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "members"
    },
    username: {
        type: String,
        required
    },
    firstName: {
        type: String,
        required
    },
    lastName: {
        type: String,
        required
    },
    salutation: {
        type: String,
        required
    },
    occupation: String,
    email: {
        type: String,
        required
    }
});

const MemberProfile = mongoose.model('memberProfile', memberProfileSchema);

module.exports = MemberProfile;
