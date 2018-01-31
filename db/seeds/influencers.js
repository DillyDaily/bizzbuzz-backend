
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('influencers').del()
    .then(function () {
      // Inserts seed entries
      return knex('influencers').insert([
        {personal_brand: "Friday We're in Love", first_name: 'Camille', last_name: 'Whiting', description: 'We made a pact when we got married - one date a week no matter what! In this lifestyle blog we share our weekly dates, our family activities, and our favorite highlights of our life in hopes that readers feel inspired to go have their own experiences.', email: 'camille@fwil.com', password: 'camille1', image: 'https://s3.amazonaws.com/bizzbuzz/IMG_0798.jpg', topics: 'dates, date night, activities, local', category: 'Instagram', city: 'Phoenix', state: 'AZ' },
        {personal_brand: 'Tenley Dene', first_name: 'Tenley', last_name: 'Murdock', description: "Come with me and you'll see a world of pure imagination", email: 'ten@ten.com', password: 'ten1', image: 'https://s3.amazonaws.com/bizzbuzz/IMG_0791.jpg', topics: 'travel, disney, life coach, dreamer, hike, baking', category: 'Instagram', city: 'Denver', state: 'CO' },
        {personal_brand: 'Meggie', first_name: 'Meghan', last_name: 'Evers', description: 'Getting and staying fit like a boss.', email: 'meggie@meggie.com', password: 'meggie1', image: 'https://s3.amazonaws.com/bizzbuzz/kXGMdGK2SI2le2xsq8O6dQ_thumb_9cb.jpg', topics: 'fitness, zumba, weight loss, strength training, mixxed fit', category: 'Instagram', city: 'Boston', state: 'MA' },
        {personal_brand: 'Coach BillyWood', first_name: 'Billy', last_name: 'Woodmansee', description: 'Father, Performance Coach: NASM-EXOS, Educator, Fitness Geek, Mentor, Fashion Enthusiast, Lifestyle Athlete', email: 'billy@bwoodfit.com', password: 'billy1', image: 'https://s3.amazonaws.com/bizzbuzz/IMG_0795.jpg', topics: 'fitness, performance, consulting, health, mentor, fashion, strength training', category: 'Instagram', city: 'Chicago', state: 'IL' }
      ]);
    });
};
