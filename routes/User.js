const userController = require('../controller/User')
const express = require('express')
const router = express.Router()

router.get('/getAllUser', userController.getAllUser)
router.post('/createUser', userController.createUser)
router.get('/getUser/:userId', userController.getUserById)
router.put('/updateUser/:userId', userController.updateUserById)
router.delete('/deleteUser/:userId',userController.deleteUserById)
module.exports = router