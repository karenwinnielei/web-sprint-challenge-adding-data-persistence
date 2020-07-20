
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'resource1'},
        {name: 'resource2'},
        {name: 'resource3'}
      ]);
    });
};
