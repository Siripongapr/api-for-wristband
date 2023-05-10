const mongoose = require('mongoose')
const Schema = mongoose.Schema
const healthSchema = new Schema({
    smoke: {type: String, require: true},
    food: {type: String, require: true},
    exercise: {type: String, require: true},
    userId:{type: Schema.Types.ObjectId}
})
const Health = mongoose.model('health', healthSchema)
module.exports = Health