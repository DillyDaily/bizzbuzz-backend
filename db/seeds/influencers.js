
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('influencers').del()
    .then(function () {
      // Inserts seed entries
      return knex('influencers').insert([
        {personal_brand: 'brand1', first_name: 'fname1', last_name: 'lname1', description: 'this is a very short description describing things about the buzz1', email: 'email@email.com1', password: 'password1', image: 'https://s3.amazonaws.com/bizzbuzz/ewdlogo.png', topics: 'topic1, stuff, things, cats, dogs', category: 'category1', city: 'Phoenix', state: 'AZ' },
        {personal_brand: 'brand2', first_name: 'fname2', last_name: 'lname2', description: 'this is a very short description describing things about the buzz2', email: 'email@email.com2', password: 'password2', image: 'https://s3.amazonaws.com/bizzbuzz/gforum.png', topics: 'topic2, other, more, birds, hamsters', category: 'category2', city: 'Denver', state: 'CO' },
        {personal_brand: 'brand3', first_name: 'fname3', last_name: 'lname3', description: 'this is a very short description describing things about the buzz3', email: 'email@email.com3', password: 'password3', image: 'https://s3.amazonaws.com/bizzbuzz/IMG_8854.JPG', topics: 'topic3, stuff, things, cats, dogs', category: 'category3', city: 'Boston', state: 'MA' }
      ]);
    });
};
