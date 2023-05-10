const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    name: {type: String, reqired: true},
    age: {type: Number, reqired: true},
    congenitalDisease: {type: String, reqired: true},
    phoneNumber: {type: String},
    device: {type: String},
    createAt: {type: Date},
    updateAt: {type: Date}

})
const User = mongoose.model('user', userSchema)
module.exports = User
