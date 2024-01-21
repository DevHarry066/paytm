const mongoose = require('mongoose');
// Create a model from the schema

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

module.exports = mongoose.model('User', userSchema);
