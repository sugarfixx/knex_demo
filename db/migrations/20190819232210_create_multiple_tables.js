
exports.up = function(knex) {
  return knex.schema.createTable('table_one', function (table) {
      table.increments();
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
      .createTable('table_two', function (table) {
          table.increments();
          table.string('name').notNullable();
          table.string('color').notNullable();
          table.timestamp('created_at').defaultTo(knex.fn.now());
          table.timestamp('updated_at').defaultTo(knex.fn.now());
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('table_one').dropTable('table_two');
};
