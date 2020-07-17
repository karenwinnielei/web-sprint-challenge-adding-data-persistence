const db = require('../data/dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
  findTasks
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
function findById(id) {
  return db('tasks').where({ id }).first();
}
function findTasks(id) {
  return db('tasks')
    .where('projectId', id)
    .join('projects', 'tasks.projectId', 'projects.id')
    .select(
      'projects.name as ProjectName',
      'projects.description as ProjectDescription',
      'tasks.id as TaskId',
      'tasks.description as TaskDescription',
    );
}
