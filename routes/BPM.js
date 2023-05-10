const bpmController = require('../controller/BPM')
const express = require('express')
const router = express.Router()

router.get('/getAllBPM', bpmController.getAllBPM)
router.post('/createBPM', bpmController.createBPM)
router.get('/getBPM/:bpmId', bpmController.getBPMById)
router.put('/updateBPM/:bpmId', bpmController.updateBPMById)
router.delete('/deleteBPM/:bpmId',bpmController.deleteBPMById)
module.exports = router