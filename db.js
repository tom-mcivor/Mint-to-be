const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getHerbs: getHerbs,
  getHerb: getHerb,
  addHerb: addHerb,
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

function addHerb(name, height, germination_id, db = connection) {
  return db('herbs').insert({
    name,
    height,
    germination_id,
  })
}
