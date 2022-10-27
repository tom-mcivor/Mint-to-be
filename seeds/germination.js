/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('germination').del()
  await knex('germination').insert([
    {
      id: 201,
      germination_dates: 'Early spring',
      watering: 'Keep well hydrated',
      light: 'Full sun',
    },
    {
      id: 202,
      germination_dates: 'Autumn, spring, and winter',
      watering: 'Require about 1 inch of water per week',
      light: 'Full sun or part shade',
    },
    {
      id: 203,
      germination_dates: 'Spring or early summer',
      watering: 'Very little watering',
      light: 'Full sun',
    },
    {
      id: 204,
      germination_dates: 'Spring or autumn',
      watering:
        'Water when soil is dry, let soil dry slightly between waterings',
      light: 'Full sun',
    },
    {
      id: 205,
      germination_dates: 'Late spring and mid-autumn',
      watering: 'Keep moist',
      light: 'Full sun or part shade',
    },
  ])
};
