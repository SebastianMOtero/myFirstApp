const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
}, {
    collection: "cities"
});

const CityModel = mongoose.model('cities', CitySchema);

module.exports = CityModel;