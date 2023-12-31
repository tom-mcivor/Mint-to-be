const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/:id/edit', (req, res) => {
  db.getHerb(req.params.id)
    .then((herb) => {
      
      res.render('edit',  herb )
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post("/edit", (req, res) => {
  db.editHerb(req.body)
    .then(() => {
      console.log(req.body)
      // console.log(req.body.height)
      res.redirect('/')
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router