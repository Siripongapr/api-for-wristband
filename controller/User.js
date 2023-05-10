const User = require('../model/User')
const Health = require('../model/Health')

module.exports = {
    getAllUser: async (req, res) => {
        const result = await User.find()
        res.status(200).json(result)
    },

    createUser: async (req, res) => {
        req.body.createAt = new Date(new Date().setHours(new Date().getHours() + 7))
        const newUser = new User(req.body)
        const result = await newUser.save()
        res.status(201).json(result)
    },

    getUserById: async (req, res) => {
        const userId = req.params.userId
        const user = await User.findById(userId)
        console.log("user", user);
        console.log("user.id", user._id);
        if (!user) {
            return res.status(404).json({message: "user not found"})
        }
        const health = await Health.findOne({ userId: user._id })

        res.status(200).json({user, health})
    },

    updateUserById: async (req, res) => {
        const userId = req.params.userId
        req.body.updateAt = new Date(new Date().setHours(new Date().getHours() + 7))
        const result = await User.findByIdAndUpdate(userId, req.body, { new: true })
        res.status(200).json(result)
    },
    deleteUserById: async (req, res) => {
        const userId = req.params.userId
        const result = await User.findByIdAndDelete(userId)
        res.status(200).json(result)
    }

}