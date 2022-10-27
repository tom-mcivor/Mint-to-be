const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getHerbs: getHerbs,
  getHerb: getHerb,
  deleteHerb: deleteHerb,
  getGerminationInfo: getGerminationInfo,
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
  .where('herbId', id)
}