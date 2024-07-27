const mongoose = require('mongoose');
const Joi = require('joi');

const UserSchema = new mongoose.Schema({  
    name: String,
    email: String,
    age: Number,
    password: String,
    places: [{ name: String, experiences: [String], feedback: [String] }], 
});

const UserModal = mongoose.model("users", UserSchema);
module.exports = {
    UserModal};