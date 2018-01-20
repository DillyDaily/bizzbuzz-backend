
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('businesses').del()
    .then(function () {
      // Inserts seed entries
      return knex('businesses').insert([
        {company_name: 'company1', first_name: 'fname1', last_name: 'lname1', description: 'this is a description1', email: 'email@email.com1', password: 'password1', image: 'https://s3-us-west-2.amazonaws.com/bizzbuzzmedia/Pesto'},
        {company_name: 'company2', first_name: 'fname2', last_name: 'lname2', description: 'this is a description2', email: 'email@email.com2', password: 'password2', image: 'https://s3.amazonaws.com/bizzbuzz/jessicasdog'},
        {company_name: 'company3', first_name: 'fname3', last_name: 'lname3', description: 'this is a description3', email: 'email@email.com3', password: 'password3', image: 'https://s3.amazonaws.com/bizzbuzz/jessicasdog'}
      ]);
    });
};
