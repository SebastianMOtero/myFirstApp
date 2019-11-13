const express = require('express');
const router = express.Router();

const Itinerary = require('../../models/Itinerary');

router.get('/itinerary/:cityId', (req, res) => {
    Itinerary.find({ cityId: req.params.cityId })
        .then(itinerary => res.json(itinerary))
});

module.exports = router;