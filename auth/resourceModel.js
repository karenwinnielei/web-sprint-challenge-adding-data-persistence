const db = require('../data/dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

async function add(resource) {
  const [id] = await db('resources').insert(resource);
  return findById(id);
}
function find() {
  return db('resources');
}
function findBy(filter) {
  return db('resources').where(filter);
}
function findById() {
  return db('resources').where({ id }).first();
}
