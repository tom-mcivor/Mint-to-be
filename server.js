const express = require('express')
const hbs = require('express-handlebars')

const herbRoutes = require('./routes/herbs')
const editRoutes = require('./routes/edit')

const server = express()

server.use(express.static('public'))

// Middleware
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.use(express.urlencoded({ extended: true }))


// Routes
server.use('/', herbRoutes)
server.use('/', editRoutes)

module.exports = server
