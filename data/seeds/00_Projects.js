
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'project1'},
        {name: 'project2'},
        {name: 'project3'}
      ]);
    });
};
