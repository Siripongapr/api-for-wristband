const Health = require('../model/Health')

module.exports = {
    getAllHealth: async(req, res)=>{
        const result = await Health.find()
        res.status(200).json(result)
    },

    createHealth: async(req, res)=>{
        const newHealth = new Health(req.body)
        const result = await newHealth.save()
        res.status(201).json(result)
    },

    getHealthById: async(req, res)=>{
        const healthId = req.params.healthId
        const result = await Health.findById(healthId)
        res.status(200).json(result)
    },

    updateHealthById: async(req, res)=>{
        const healthId = req.params.healthId
        const result = await Health.findByIdAndUpdate(healthId, req.body, {new: true})
        res.status(200).json(result)
    },

    deleteHealthById: async(req, res)=>{
        const healthId = req.params.healthId
        const result = await Health.findByIdAndDelete(healthId)
        res.status(200).json(result)
    }

}