
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('businesses').del()
    .then(function () {
      // Inserts seed entries
      return knex('businesses').insert([
        {company_name: 'Picmonic', first_name: 'Ken', last_name: 'Robertson', description: "Revolutionize the way you learn. We turn important facts you need to know into pictures and stories you'll never forget", email: 'ken@picmonic.com', password: 'picmonic1', image: 'https://s3.amazonaws.com/bizzbuzz/IMG_0818.jpg', category: 'Instagram', topics: 'education, nurse, nursing, study, medicine, medschool, school', city: 'Phoenix', state: 'AZ'},
        {company_name: 'Galvanize', first_name: 'Diana', last_name: 'Vowels', description: 'Our campus serves as a home base to start-ups and established companies building tech-enabled innovations and has all of the amenities of a co-working space - plus learning opportunities, resources, and access to the network a growing startup needs.', email: 'diana@galvanize.com', password: 'galvanize1', image: 'https://s3.amazonaws.com/bizzbuzz/gLogo2.png', category: 'Instagram', topics: 'education, web, development, data science, data, learn', city: 'Phoenix', state: 'AZ'},
        {company_name: 'TOAST', first_name: 'Alexis', last_name: 'Finney', description: 'Support your most adorable local coffee shop. We aim to serve up smiles with every cup.', email: 'ali@toast.com', password: 'toast1', image: 'https://s3.amazonaws.com/bizzbuzz/IMG_0787.jpg', category: 'Instagram', topics: 'coffee, local, premium', city: 'Tempe', state: 'AZ'},
        {company_name: 'Mallery Photography', first_name: 'Mal', last_name: 'Kellogg', description: 'Incredible photography', email: 'mal@mal.com', password: 'mal1', image: 'https://s3.amazonaws.com/bizzbuzz/j92A%2B2%25%2BSbauthM4hcN0MA_thumb_9d0.jpg', category: 'Instagram', topics: 'photography, pictures, art', city: 'Phoenix', state: 'AZ'},
        // {company_name: 'company5', first_name: 'fname5', last_name: 'lname5', description: 'this is a description5', email: 'email@email.com5', password: 'password5', image: 'https://s3.amazonaws.com/bizzbuzz/jessicasdog', category: 'Instagram', topics: 'topic1', city: 'Phoenix', state: 'AZ'},
        // {company_name: 'company6', first_name: 'fname6', last_name: 'lname6', description: 'this is a description6', email: 'email@email.com6', password: 'password6', image: 'https://s3.amazonaws.com/bizzbuzz/IMG_8854.JPG', category: 'Instagram', topics: 'topic1', city: 'Phoenix', state: 'AZ'},
        // {company_name: 'company7', first_name: 'fname7', last_name: 'lname7', description: 'this is a description7', email: 'email@email.com7', password: 'password7', image: 'https://s3.amazonaws.com/bizzbuzz/ewdlogo.png', category: 'Instagram', topics: 'topic1', city: 'Phoenix', state: 'AZ'}
      ]);
    });
};
