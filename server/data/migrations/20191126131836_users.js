
exports.up = function(knex) {
    
    return knex.schema.createTableIfNotExists('users', (table) => {
        table.increments();
        table.string('name').notNullable();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};


