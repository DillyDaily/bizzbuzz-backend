
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('influencers').del()
    .then(function () {
      // Inserts seed entries
      return knex('influencers').insert([
        {personal_brand: 'brand1', first_name: 'fname1', last_name: 'lname1', description: 'this is a description1', email: 'email@email.com1', password: 'password1', image: 'image1', website: 'site1', facebook: 'facebook1', instagram: 'instagram1', twitter: 'tweet1' },
        {personal_brand: 'brand2', first_name: 'fname2', last_name: 'lname2', description: 'this is a description2', email: 'email@email.com2', password: 'password2', image: 'image2', website: 'site2', facebook: 'facebook2', instagram: 'instagram2', twitter: 'tweet2' },
        {personal_brand: 'brand3', first_name: 'fname3', last_name: 'lname3', description: 'this is a description3', email: 'email@email.com3', password: 'password3', image: 'image3', website: 'site3', facebook: 'facebook3', instagram: 'instagram3', twitter: 'tweet3' }
      ]);
    });
};
