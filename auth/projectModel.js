const db = require('../data/dbConfig')

module.exports = {
  add,
  find,
  findBy,
  findById,
}

async function add(item){
  const [id] = await db('projects').insert(item)
  return findById(id)
}
function find(){
  return db('projects')
}
function findBy(filter){
  return db('projects').where(filter)
}
function findById(){
  return db('projects').where({id}).first()
}
