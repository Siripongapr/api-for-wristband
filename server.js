const express = require('express')
const app = express()
const mongoose = require('mongoose')
const user = require('./routes/User')
const hardware = require('./routes/Hardware')
const health = require('./routes/Health')
const bodyParser = require('body-parser');
const cors = require('cors')
const bpm = require('./routes/BPM')


const DB_URL = "mongodb+srv://Patchaya:faree20082543@projectcpe.ytsxm.mongodb.net/ProjectCPE?retryWrites=true&w=majority";
mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("Connected to DB");
    })
    .catch(err => {
        console.log(err);
    })
    
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/user', user)
app.use('/api/hardware', hardware)
app.use('/api/health', health)
app.use('/api/bpm', bpm)

app.listen(9000, () => {
    console.log('Application is running on port 9000')
})
