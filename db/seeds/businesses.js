
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('businesses').del()
    .then(function () {
      // Inserts seed entries
      return knex('businesses').insert([
        {company_name: 'company1', first_name: 'fname1', last_name: 'lname1', description: 'this is a description1', email: 'email@email.com1', password: 'password1', image: 'https://s3-us-west-2.amazonaws.com/bizzbuzzmedia/Pesto', category: 'Instagram', topics: 'topic1', city: 'Phoenix', state: 'AZ'},
        {company_name: 'company2', first_name: 'fname2', last_name: 'lname2', description: 'this is a description2', email: 'email@email.com2', password: 'password2', image: 'https://s3.amazonaws.com/bizzbuzz/ewdlogo.png', category: 'Instagram', topics: 'topic1', city: 'Phoenix', state: 'AZ'},
        {company_name: 'company3', first_name: 'fname3', last_name: 'lname3', description: 'this is a description3', email: 'email@email.com3', password: 'password3', image: 'https://s3.amazonaws.com/bizzbuzz/gforum.png', category: 'Instagram', topics: 'topic1', city: 'Phoenix', state: 'AZ'},
        {company_name: 'company4', first_name: 'fname4', last_name: 'lname4', description: 'this is a description4', email: 'email@email.com4', password: 'password4', image: 'https://s3.amazonaws.com/bizzbuzz/logodraft2.png', category: 'Instagram', topics: 'topic1', city: 'Phoenix', state: 'AZ'},
        {company_name: 'company5', first_name: 'fname5', last_name: 'lname5', description: 'this is a description5', email: 'email@email.com5', password: 'password5', image: 'https://s3.amazonaws.com/bizzbuzz/jessicasdog', category: 'Instagram', topics: 'topic1', city: 'Phoenix', state: 'AZ'},
        {company_name: 'company6', first_name: 'fname6', last_name: 'lname6', description: 'this is a description6', email: 'email@email.com6', password: 'password6', image: 'https://s3.amazonaws.com/bizzbuzz/IMG_8854.JPG', category: 'Instagram', topics: 'topic1', city: 'Phoenix', state: 'AZ'},
        {company_name: 'company7', first_name: 'fname7', last_name: 'lname7', description: 'this is a description7', email: 'email@email.com7', password: 'password7', image: 'https://s3.amazonaws.com/bizzbuzz/ewdlogo.png', category: 'Instagram', topics: 'topic1', city: 'Phoenix', state: 'AZ'}
      ]);
    });
};
