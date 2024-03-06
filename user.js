// Create and export a model with

const mongoose = require('mongoose');
/**
 * Represents a user in the system.
 * @typedef {Object} User
 * @property {string} name - The name of the user.
 * @property {string} email - The email address of the user.
 * @property {string} password - The password of the user.
 */
const user = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const userModel = mongoose.model('user', user);//user is the name of the collection in the database

module.exports = userModel;