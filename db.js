const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getHerbs: getHerbs,
  getHerb: getHerb,
  addHerb: addHerb,
  deleteHerb: deleteHerb,
  getGerminationInfo: getGerminationInfo,
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

function getGerminationInfo(id, db = connection) {
  return db('herbs')
  .join('germination', 'herbs.germination_id', 'germination.id')
  .select(
    'name',
    'height',
    'herbs.id as herbId',
    'germination.id as germinationId',
    'germination_dates as germinationDates',
    'watering',
    'light'
    )
  .where('herbId', id).first()
}


function editHerb(updatedHerb, db = connection) {
  return db('herbs').where('id', updatedHerb.id).update({ "name": updatedHerb.name, "height":updatedHerb.height })
}

function addHerb(name, height, germination_id, db = connection) {
  return db('herbs').insert({
    name,
    height,
    germination_id,
  })
}

