
exports.up = function(knex, Promise) {
    return knex.schema.createTable('messages', (table) => {
      table.increments();
      table.integer('businesses_id')
        .references('id')
        .inTable('businesses')
        .onDelete('CASCADE')
        .index();
      table.integer('influencers_id')
        .references('id')
        .inTable('influencers')
        .onDelete('CASCADE')
        .index();
      table.text('message');
      table.timestamps(true, true);
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('messages');
  };