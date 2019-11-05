const express = require('express');
const router = express.Router();
var cors = require('cors');

// Cities model
const City = require('../../models/City');

// @route GET api/cities
router.get('/cities/all', cors(), (req, res) => {
    City.find()
        .then(cities => res.json(cities))
});

// @route POST api/cities
router.post('/cities/all', (req, res) => {
    const newCity = new  City({
        name: req.body.name,
        country: req.body.country
    });
    console.log(newCity.name);
    newCity.save()
        .then(city =>res.json(city));
});

module.exports = router;