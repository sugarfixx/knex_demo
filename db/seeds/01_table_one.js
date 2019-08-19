
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_one').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_one').insert([
        {id: 1, title: 'rowTitle1', description: 'rowDescription1'},
        {id: 2, title: 'rowTitle2', description: 'rowDescription2'},
        {id: 3, title: 'rowTitle3', description: 'rowDescription3'}
      ]);
    });
};
