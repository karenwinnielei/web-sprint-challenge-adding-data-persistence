const db = require('../data/dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

async function add(project) {
  const [id] = await db('projects').insert(project);
  return findById(id);
}

function find() {
  return db('projects');
}
function findBy(filter) {
  return db('projects').where(filter);
}
function findById(id) {
  return db('projects').where({ id }).first();
}

