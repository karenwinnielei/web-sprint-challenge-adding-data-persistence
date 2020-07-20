exports.up = function (knex) {
  return (
    knex.schema
      .createTable('projects', (tbl) => {
        tbl.increments();
        tbl.string('name', 128).notNullable();
        tbl.string('description', 128);
        tbl.integer('completed').defaultTo(0);
      })
      .createTable('resources', (tbl) => {
        tbl.increments();
        tbl.string('name', 128).unique().notNullable();
        tbl.string('description', 128);
      })
      .createTable('tasks', (tbl) => {
        tbl.increments();
        tbl.string('description', 128).notNullable();
        tbl.string('notes', 128);
        tbl.integer('completed').defaultTo(0);
        tbl
          .integer('projectId')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      })
      .createTable('projects_resources', (tbl) => {
        tbl.increments();
        tbl
          .integer('projectId')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        tbl
          .integer('resourceId')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('resources')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      })
  );
};

exports.down = function (knex) {
  return knex.schema
  .dropTableIfExists('projects_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
