const express = require('express');
const router = express.Router();
const yahooWeather = require("yahoo-Weather");


router.get('/:zip', function(req, res){
    yahooWeather(req.params.zip, 'f').then(forecast => {
        return res.json(forecast);
    })
});

module.exports= router; 