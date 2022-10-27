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
