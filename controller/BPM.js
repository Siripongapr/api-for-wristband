const BPM = require('../model/BPM')

module.exports = {
    getAllBPM: async(req, res)=>{
        const result = await BPM.find()
        res.status(200).json(result)
    },

    createBPM: async(req, res)=>{
        req.body.createAt = new Date(new Date().setHours(new Date().getHours() + 7))
        const newBPM = new BPM(req.body)
        const result = await newBPM.save()
        res.status(201).json(result)
    },

    getBPMById: async(req, res)=>{
        const bpmId = req.params.bpmId
        const result = await BPM.findById(bpmId)
        res.status(200).json(result)
    },

    updateBPMById: async(req, res)=>{
        const bpmId = req.params.bpmId
        const result = await BPM.findByIdAndUpdate(bpmId, req.body, {new: true})
        res.status(200).json(result)
    },

    deleteBPMById: async(req, res)=>{
        const bpmId = req.params.bpmId
        const result = await BPM.findByIdAndDelete(bpmId)
        res.status(200).json(result)
    }

}