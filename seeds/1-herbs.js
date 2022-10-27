exports.seed = function (knex) {
  return knex('herbs')
.insert([
      { id: 101, name: 'Basil', height: '30cm to 90cm', germination_id: 201 },
      { id: 102, name: 'Coriander', height: '30cm to 55cm', germination_id: 202 },
      { id: 103, name: 'Thyme', height: '15cm to 30cm', germination_id: 203 },
      { id: 104, name: 'Rosemary', height: '90cm to 150cm', germination_id: 204 },
      { id: 105, name: 'Mint', height: '30cm to 60cm', germination_id: 205 },
    ])
}
