const express = require('express');
const router = express.Router();

// Cities model
const City = require('../../models/City');

// @route GET api/cities
router.get('/cities/all', (req, res) => {
    City.find()
        .then(cities => res.json(cities))
});

module.exports = router;