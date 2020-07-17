
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {projectId: 1, description: 'description1'},
        {projectId: 2, description: 'description2'},
        {projectId: 3, description: 'description3'}
      ]);
    });
};
