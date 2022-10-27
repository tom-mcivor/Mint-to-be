const express = require('express')
const hbs = require('express-handlebars')

const herbRoutes = require('./routes/herbs')

const server = express()

// Middleware
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.use(express.urlencoded({ extended: true }))

// Routes
server.use('/', herbRoutes)

module.exports = server
