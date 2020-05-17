const express = require('express');
const Router = express.Router();

Router  
    .get('/get-data', (req, res) => {
        res.json({ data: "Data Gotten "});
    })

module.exports = Router;