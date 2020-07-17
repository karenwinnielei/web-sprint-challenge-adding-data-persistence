const db = require('../data/dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

async function add(task) {
  const [id] = await db('tasks').insert(task);
  return findById(id);
}
function find() {
  return db('tasks');
}
function findBy(filter) {
  return db('tasks').where(filter);
}
function findById() {
  return db('tasks').where({ id }).first();
}
