const hardwareController = require('../controller/Hardware')
const express = require('express')
const router = express.Router()

router.get('/getAllHardware', hardwareController.getAllHardware)
router.post('/createHardware', hardwareController.createHardware)
router.get('/getUnused', hardwareController.checkDeviceAndUser)
router.put('/updateUsed', hardwareController.usedHardware)
router.get('/getHardware/:hardwareId', hardwareController.getHardwareById)
router.put('/updateHardware/:hardwareId', hardwareController.updateHardwareById)
router.delete('/deleteHardware/:hardwareId',hardwareController.deleteHardwareById)
module.exports = router