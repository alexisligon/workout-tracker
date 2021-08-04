const router = require("express").Router();
const path = require('path');

router.get('/api/workouts', (req, res) => {
    res.sendFile(path.join(__dirname, '../../api.js'))
})