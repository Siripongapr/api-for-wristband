const healthController = require('../controller/Health')
const express = require('express')
const router = express.Router()

router.get('/getAllHealth', healthController.getAllHealth)
router.post('/createHealth', healthController.createHealth)
router.get('/getHealth/:healthId', healthController.getHealthById)
router.put('/updateHealth/:healthId', healthController.updateHealthById)
router.delete('/deleteHealth/:healthId',healthController.deleteHealthById)
module.exports = router