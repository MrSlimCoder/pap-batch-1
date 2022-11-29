const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
    email: {
        type: String, 
        required: true, 
        unique: true
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    age: {
        type: Number,
    },
    delete: {
        type: Boolean,
        default: false
    }
});

module.exports =mongoose.model('User', User);