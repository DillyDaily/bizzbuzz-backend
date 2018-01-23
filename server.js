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
const AWS = require('aws-sdk');
const fileUpload = require('express-fileupload');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));
app.use(cors());
// app.use(morgan(combined));

//TESTING REGISTER PAGE
app.get('/register', (req, res) => {
  res.send({ message: 'Success!' })
});
app.post('/register', (req, res) => {
  res.send({ message: 'POST Success!' })
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

//Login
app.get('/login', function (req, res) {
  res.send({ message: "You've reached the login page!" })
});

app.listen(port, function () {
  console.log("running on localhost:"+port);
});