exports.up = function(knex, Promise) {
    return knex.schema.createTable('influencers', function (table) {
        table.increments();
        table.text('first_name');
        table.text('last_name');
        table.text('description');
        table.text('email');
        table.text('password');
        table.text('personal_brand');
        table.text('website');
        table.text('facebook');
        table.text('instagram');
        table.text('twitter');
        table.text('image');
        table.timestamps(true, true);
        });
    };
    
    exports.down = function (knex, Promise) {
        return knex.schema.dropTable('influencers');
    };