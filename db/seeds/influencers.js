
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('influencers').del()
    .then(function () {
      // Inserts seed entries
      return knex('influencers').insert([
        {personal_brand: "Friday We're in Love", first_name: 'Camille', last_name: 'Whiting', description: 'We made a pact when we got married - one date a week no matter what! In this lifestyle blog we share our weekly dates, our family activities, and our favorite highlights of our life in hopes that readers feel inspired to go have their own experiences.', email: 'camille@fwil.com', password: 'camille1', image: 'https://s3.amazonaws.com/bizzbuzz/EYF6Kw9hRzebG92vyxROzg_thumb_9ce.jpg', topics: 'dates, date night, activities, local', category: 'Instagram', city: 'Phoenix', state: 'AZ' },
        {personal_brand: 'Tenley Dene', first_name: 'Tenley', last_name: 'Murdock', description: "Come with me and you'll see a world of pure imagination", email: 'ten@ten.com', password: 'ten1', image: 'https://s3.amazonaws.com/bizzbuzz/ki%2Br4LUTRBCoe%2BPz420s1w_thumb_9cd.jpg', topics: 'travel, disney, life coach, dreamer, hike, baking', category: 'Instagram', city: 'Denver', state: 'CO' },
        {personal_brand: 'Meggie', first_name: 'Meghan', last_name: 'Evers', description: 'Getting and staying fit like a boss.', email: 'meggie@meggie.com', password: 'meggie1', image: 'https://s3.amazonaws.com/bizzbuzz/kXGMdGK2SI2le2xsq8O6dQ_thumb_9cb.jpg', topics: 'fitness, zumba, weight loss, strength training, mixxed fit', category: 'Instagram', city: 'Boston', state: 'MA' }
      ]);
    });
};
