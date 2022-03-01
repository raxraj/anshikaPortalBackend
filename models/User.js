const { Schema, model } = require("mongoose");

let userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    emailAddress: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

module.exports = model('user', userSchema)
