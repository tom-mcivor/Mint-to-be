const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/:id', (req, res) => {
  db.getHerb(req.params.id)
    .then((herb) => {
      console.log(req.params.id)
      console.log(herb)
      res.render('info', herb )
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router