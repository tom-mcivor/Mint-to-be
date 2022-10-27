const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getHerbs()
    .then((herbs) => {
      res.render('index', { herbs })
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// Add route

router.get('/add', (req, res) => {
  res.render('add')
})

router.post('/', (req, res) => {
  const { name, height, germination } = req.body
  console.log(req.body)
  db.addHerb(name, height, germination)
    .then(() => {
      res.redirect('/')
    })
    .catch((err) => {
      console.log(err)
    })
})

router.get('/herb/:id/delete', (req, res) => {
  db.deleteHerb(req.params.id)
    .then(() => {
      console.log(req.params.id)
      res.redirect('/')
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
