
exports.up = function(knex) {
  return knex.schema.createTable('authors', function (table) {
      table.increments('id');
      table.string('name').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
  }).createTable('quotes', function (table) {
      table.increments('id');
      table.string('quote', 512).notNullable();
      table.integer('author_id').references('id').inTable('authors');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('quotes').dropTable('authors');
};
