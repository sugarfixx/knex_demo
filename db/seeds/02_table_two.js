
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, name: 'rowName1', color: 'red'},
        {id: 2, name: 'rowName2', color: 'blue'},
        {id: 3, name: 'rowName3', color: 'green'}
      ]);
    });
};
