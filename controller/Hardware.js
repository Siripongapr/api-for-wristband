const Hardware = require('../model/Hardware')
const User = require('../model/User')

module.exports = {
    getAllHardware: async(req, res)=>{
        const result = await Hardware.find()
        res.status(200).json(result)
    },

    createHardware: async(req, res)=>{
        req.body.createAt = new Date(new Date().setHours(new Date().getHours() + 7))
        if (req.body.userId) {
            req.body.used = true
        }
        const newHardware = new Hardware(req.body)
        const result = await newHardware.save()
        res.status(201).json(result)
    },

    checkDeviceAndUser: async(req, res)=>{
        const hardware = await Hardware.find({used: false})
        const user = await User.find( {$or: [{device: {$eq: null}}, {device: {$eq:""}}]} )
        res.status(200).json({hardware, user})
    },

    usedHardware: async(req, res)=>{
        const {hardwareId, userId} = req.query
        console.log("hardware: ", hardwareId);
        console.log("user: ", userId);
        console.log("queryparam: ", req.query);
        var checkquery = false
        var requirequery = ""
        if (!hardwareId) {
            // checkquery = true
            // requirequery += "hardwareId"
            return res.status(404).json({message: "require query param hardwareId"})
        }
        if (!userId) {
            // checkquery = true
            // requirequery += "userId"
            return res.status(404).json({message: "require query param userId"})
        }
        // if (checkquery) {
        //     return res.status(404).json({message: "require query param "+requirequery})
        // }

        const hardware = await Hardware.findById(hardwareId)
        if (!hardware) {
            return res.status(404).json({message: "not found hardware"})
        }

        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({message: "not found user"})
        }
        hardware.set({
            used: req.body.used,
            userId: req.body.used?userId: null
        })
        user.set({
            device: req.body.used?req.body.device: null
        })
        
        const hardwareInfo = await hardware.save()
        const userInfo = await user.save()

        res.status(200).json({hardwareInfo, userInfo})
    },

    getHardwareById: async(req, res)=>{
        const hardwareId = req.params.hardwareId
        const result = await Hardware.findById(hardwareId)
        res.status(200).json(result)
    },

    updateHardwareById: async(req, res)=>{
        req.body.updateAt = new Date(new Date().setHours(new Date().getHours() + 7))
        const hardwareId = req.params.hardwareId
        const result = await Hardware.findByIdAndUpdate(hardwareId, req.body, {new: true})
        res.status(200).json(result)
    },

    deleteHardwareById: async(req, res)=>{
        const hardwareId = req.params.hardwareId
        const result = await Hardware.findByIdAndDelete(hardwareId)
        res.status(200).json(result)
    }

}