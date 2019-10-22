const express = require('express')
const PlaceController = require('./controllers/PlaceController')

const routes = new express.Router()

routes.get('/places', PlaceController.getPlaces)
routes.post('/places', PlaceController.createPlace)

module.exports = routes