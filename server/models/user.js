const mongoose = require('mongoose');

const User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minLength: 9,
        trim: true

    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        trim: true
    }
});

module.exports = User;