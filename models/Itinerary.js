const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItinerarySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        required: true
    },
    profileName: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    hashtag: {
        type: Array,
        required: true
    },
    cityId: {
        type: mongoose.Types.ObjectId
    }
}, {
    collection: "itinerary"
});

const ItineraryModel = mongoose.model('itinerary', ItinerarySchema);

module.exports = ItineraryModel;