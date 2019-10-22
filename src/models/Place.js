const mongoose = require('mongoose')

const PlaceSchema = new mongoose.Schema({
    localidade: String,
    latitude: Number,
    longitude: Number

}, {
        timestamps: true
    })

module.exports = mongoose.model('Place', PlaceSchema)