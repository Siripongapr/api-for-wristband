const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bpmSchema = new Schema({
    device: {type: String},
    value: {type: Number},
    timestamp: {type: Date}
})
const BPM = mongoose.model('bpm', bpmSchema)
module.exports = BPM