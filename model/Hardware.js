const mongoose = require('mongoose')
const Schema = mongoose.Schema
const hardwareSchema = new Schema({
    device: {type: String},
    used: {type: Boolean,default: false},
    userId:{type: Schema.Types.ObjectId},
    createAt: {type: Date}
})
const Hardware = mongoose.model('hardware', hardwareSchema)
module.exports = Hardware

