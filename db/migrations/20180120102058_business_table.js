exports.up = function(knex, Promise) {
    return knex.schema.createTable('businesses', function (table) {
        table.increments();
        table.text('company_name')
        table.text('first_name');
        table.text('last_name');
        table.text('description');
        table.text('email');
        table.text('password');
        table.text('image')
        table.timestamps(true, true);
        });
    };
    
    exports.down = function (knex, Promise) {
        return knex.schema.dropTable('businesses');
    };