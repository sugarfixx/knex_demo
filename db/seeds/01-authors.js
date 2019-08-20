
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        {id: 1, name: 'Sir Winston Churchill'},
        {id: 2, name: 'Muhammad Ali'},
      ]);
    });
};
