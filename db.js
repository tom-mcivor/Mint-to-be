const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getHerbs: getHerbs,
  getHerb: getHerb,
  deleteHerb: deleteHerb,
  editHerb: editHerb,
}

function getHerbs(db = connection) {
  return db('herbs').select()
}

function getHerb(id, db = connection) {
  return db('herbs').where('id', id).first()
}

function deleteHerb(id, db = connection) {
  return db('herbs').where('id', id).del()
}

function editHerb(updatedHerb, db = connection) {
  return db('herbs').where('id', updatedHerb.id).update({ "name": updatedHerb.name, "height":updatedHerb.height })
}