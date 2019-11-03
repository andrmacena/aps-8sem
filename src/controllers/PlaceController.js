const Place = require('../models/Place')

module.exports = {

    async getPlaces(req, res) {
        const places = await Place.find().sort('-createdAt')

        return res.json(places)
    },

    async createPlace(req, res) {
        const { localidade, latitude, longitude, disaster, description } = req.body

        const place = await Place.create({
            localidade,
            latitude,
            longitude,
            disaster,
            description
        })

        return res.json(place)
    }
}