const env = 'development';
const config = require('./knexfile.js')[env];
const path = require('path');
const express = require('express');
// const fs = require('fs');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
// const logger = require('morgan');
const knex = require('./db/knex');
const app = express();
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt-nodejs')
const fileUpload = require('express-fileupload');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));
app.use(cors());
// app.use(morgan(combined));

//USER - Splash Page
app.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
});

//Login
app.post('/login', function (req, res) {
  const authLogin = require('./lib/authLogin')
  let token = authLogin('businesses', req.body, res).then(user => {
    res.send(user)
  })
});

//Create New Influencer - Register & Create Profile
app.post('/register/buzz', function (req, res) {
  knex('influencers').insert(req.body).then(() => {
    res.json({ registered: true })
  })
});

//Create New Business - Register & Create Profile
app.post('/register/bizz', function (req, res) {
  let uploadData = {
    Key: req.body.first_name,
    Body: req.files.upload.data,
    ContentType: req.files.upload.mimetype,
    ACL: 'public-read'
  }
  s3Bucket.putObject(uploadData, function(err, data){
    if(err){
      console.log(err);
      return;
    }
    knex('businesses').insert({
      first_name:req.body.first_name,
      last_name:req.body.last_name,
      description:req.body.description,
      password:req.body.password,
      email:req.body.email,
      image: baseAWSURL + uploadData.Key // We know that the key will be the end of the url
    })
    // .then(()=>{
    //   res.redirect('/influencers');
    // })
  });
});


function jwtAuth(req, res, next){
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  console.log('req.query', req.query)
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, 'shhhhh', function(err, decoded) {

      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        console.log(req.decoded);
        next();
      }
    });
 
  } else {
 
    // if there is no token
    // return an error
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });
  }
 }



app.use(jwtAuth);
//Influencer as User - Get All Businesses
app.get('/businesses', function (req, res, next) {
  knex('businesses').select().then(business => res.json(business))
});

//Business as User - Get All Influencers
app.get('/influencers', function (req, res, next) {
  knex('influencers').select().then(influencer => res.json(influencer))
});

//Influencer as User - Get One Business Profile
app.get('/profile/bizz/:id', function (req, res) {
  knex('businesses').select().where('id', req.params.id).then(business => res.json(business))
});

//Business as User - Get One Influencer Profile
app.get('/profile/buzz/:id', function (req, res) {
  knex('influencers').select().where('id', req.params.id).then(influencer => res.json(influencer))
});




//   knex('businesses').insert(req.body).then(() => {
//       knex('businesses').select().then(business => res.json(business))
//   });
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



//Business as User - Get Own Profile 
app.get('/my/bizz/profile/:id'), function (req, res) {
  knex('businesses').select().where('id', req.body.id).then(business => res.json(business))
};

//Influencer as User - Get Own Profile 
app.get('/my/buzz/profile/:id'), function (req, res) {
  knex('influencers').select().where('id', req.body.id).then(influencer => res.json(influencer))
};

//Edit Business Profile
app.patch('my/bizz/profile/:id', function (req, res) {
  knex('businesses').update(req.body).where('id', req.params.id).then(function () {
      knex('businesses').select().then(business => res.json(business))
  });
});

//Edit Influencer Profile
app.patch('my/buzz/profile/:id', function (req, res) {
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


// ----MESSAGES as a bizz -----//

//Send a Message
app.post('/contact/:id', function (req, res) { 
  knex('messages').insert(req.body).then(() => {
    knex('messages').select().then(message => res.json(message))
  })
});

//Get All of your own messages
app.get('/messages/:id'), function (req, res) {
  knex('messages').select().where('id', req.params.id).then(message => res.json(message))
};

//Get One Message
app.get('/message/:id', function (req, res) {
  knex('messages').select().where('id', req.params.id).then(message => res.json(message))
});

//Reply to One Message
app.post('/message/:id', function (req, res) {
  knex('messages')
});

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

app.listen(port, function () {
  console.log("running on localhost:"+port);
});

