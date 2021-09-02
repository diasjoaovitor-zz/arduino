const express = require('express')

const { index, acender, apagar } = require('./controller.js')

const routes = express.Router()

routes.get('/', index)
routes.post('/acender', acender)
routes.post('/apagar', apagar)

module.exports = routes
