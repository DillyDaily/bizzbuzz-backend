var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

// const businesses = require("../controllers/businesses.js");
// const influencers = require("../controllers/influencers.js");

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

    //USER - Splash Page
    router.get('/', function(req, res, next) {
        res.render('index', { title: 'Express' });
     });

    //Influencer as User - Get All Businesses
    router.get('/businesses', function (req, res, next) {
        knex('businesses').select().then(business => res.json(business))
      });

    //Business as User - Get All Influencers
    router.get('/influencers', function (req, res, next) {
        knex('influencers').select().then(influencer => res.json(influencer))
      });

    //Influencer as User - Get One Business Profile
    router.get('/business/:id', function (req, res) {
      knex('businesses').select().where('id', req.params.id).then(business => res.json(business))
    });

    //Business as User - Get One Influencer Profile
    router.get('/influencer/:id', function (req, res) {
      knex('influencers').select().where('id', req.params.id).then(business => res.json(business))
    });
    
    //Create New Business
    router.post('/business/create', function (req, res) {
        knex('businesses').insert(req.body).then(() => {
            knex('businesses').select().then(business => res.json(business))
        });
    });
    //Create New Influencer
    router.post('/influencer/create', function (req, res) {
        knex('influencers').insert(req.body).then(() => {
            knex('influencers').select().then(influencer => res.json(influencer))
        });
    });
    
    //Edit Business Profile
    router.patch('/business/edit/:id', function (req, res) {
        knex('businesses').update(req.body).where('id', req.params.id).then(function () {
            knex('businesses').select().then(business => res.json(business))
        });
    });
    //Edit Influencer Profile
    router.patch('/influencer/edit/:id', function (req, res) {
        knex('influencers').update(req.body).where('id', req.params.id).then(function () {
            knex('influencers').select().then(influencer => res.json(influencer))
        });
    });
    
    //Delete Business Profile
    router.delete('/delete/business/:id', function (req, res) {
        knex('businesses').del().where('id', req.params.id).then(function () {
            knex('businesses').select().then(business => res.json(business))
        });
    });
    
    //Delete Influencer Profile
    router.delete('/delete/influencer/:id', function (req, res) {
        knex('influencers').del().where('id', req.params.id).then(function () {
            knex('influencers').select().then(influencer => res.json(influencer))
        });
    });
    
    
    module.exports = router;
    
    
    //ADMIN - Get All Blog Posts
    //   router.get('/admin/blog', function (req, res, next) {
        //     knex('posts').select().then(post => res.json(post))
        //   });
        
    //ADMIN - Get All Messages
    //   router.get('/admin/messages', function (req, res, next) {
        //     knex('messages').select().then(message => res.json(message))
        //   });
    //USER - Send a Message
    // router.post('/contact', function (req, res) {
    //     knex('messages').insert(req.body).then(() => {
    //         knex('messages').select().then(message => res.json(message))
    //     });
    // });