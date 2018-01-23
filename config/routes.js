const express = require('express');
const knex = require('../db/knex');

module.exports = (app) => {


app.post('/register', (req, res) => {
    res.send('success!')
});

//USER - Splash Page
app.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
 });

//Influencer as User - Get All Businesses
app.get('/businesses', function (req, res, next) {
    knex('businesses').select().then(business => res.json(business))
  });

//Business as User - Get All Influencers
app.get('/influencers', function (req, res, next) {
    knex('influencers').select().then(influencer => res.json(influencer))
  });

//Influencer as User - Get One Business Profile
app.get('/business/:id', function (req, res) {
  knex('businesses').select().where('id', req.params.id).then(business => res.json(business))
});

//Business as User - Get One Influencer Profile
app.get('/influencer/:id', function (req, res) {
  knex('influencers').select().where('id', req.params.id).then(business => res.json(business))
});

//Create New Business
app.post('/business/create', function (req, res) {
    knex('businesses').insert(req.body).then(() => {
        knex('businesses').select().then(business => res.json(business))
    });
});
//Create New Influencer
app.post('/influencer/create', function (req, res) {
    knex('influencers').insert(req.body).then(() => {
        knex('influencers').select().then(influencer => res.json(influencer))
    });
});

//Edit Business Profile
app.patch('/business/edit/:id', function (req, res) {
    knex('businesses').update(req.body).where('id', req.params.id).then(function () {
        knex('businesses').select().then(business => res.json(business))
    });
});
//Edit Influencer Profile
app.patch('/influencer/edit/:id', function (req, res) {
    knex('influencers').update(req.body).where('id', req.params.id).then(function () {
        knex('influencers').select().then(influencer => res.json(influencer))
    });
});

//Delete Business Profile
app.delete('/delete/business/:id', function (req, res) {
    knex('businesses').del().where('id', req.params.id).then(function () {
        knex('businesses').select().then(business => res.json(business))
    });
});

//Delete Influencer Profile
app.delete('/delete/influencer/:id', function (req, res) {
    knex('influencers').del().where('id', req.params.id).then(function () {
        knex('influencers').select().then(influencer => res.json(influencer))
    });
});


}

//s3: 
// app.get('/businesses', function(req, res){
//   knex('businesses').then((results)=>{
//     res.render('index', {businesses: results});
//   })
// });

// app.post('/businesses', function(req, res) {
//   console.log(req.body);
//   console.log(req.files.upload);
//   let uploadData = {
//     Key: req.body.first_name,
//     Body: req.files.upload.data,
//     ContentType: req.files.upload.mimetype,
//     ACL: 'public-read'
//   }
//   s3Bucket.putObject(uploadData, function(err, data){
//     if(err){
//       console.log(err);
//       return;
//     }

//     knex('businesses').insert({
//       first_name:req.body.first_name,
//       email:req.body.email,
//       image: baseAWSURL + uploadData.Key // We know that the key will be the end of the url
//     }).then(()=>{
//       res.redirect('/businesses');
//     })
//   });
// });
  
//   app.listen(port, function () {
//     console.log("running on localhost:"+port);
//   });



//ADMIN - Get All Blog Posts
    //   app.get('/admin/blog', function (req, res, next) {
        //     knex('posts').select().then(post => res.json(post))
        //   });
        
    //ADMIN - Get All Messages
    //   app.get('/admin/messages', function (req, res, next) {
        //     knex('messages').select().then(message => res.json(message))
        //   });
    //USER - Send a Message
    // app.post('/contact', function (req, res) {
    //     knex('messages').insert(req.body).then(() => {
    //         knex('messages').select().then(message => res.json(message))
    //     });
    // });