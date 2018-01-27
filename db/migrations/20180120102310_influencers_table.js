exports.up = function(knex, Promise) {
    return knex.schema.createTable('influencers', function (table) {
        table.increments();
        table.text('email');
        table.text('password');
        table.text('first_name');
        table.text('last_name');
        table.text('description');
        table.text('topics');
        table.text('personal_brand');
        table.text('category');
        table.text('city');
        table.text('state');
        table.text('image');
        table.timestamps(true, true);
        });
    };
    
    exports.down = function (knex, Promise) {
        return knex.schema.dropTable('influencers');
    };