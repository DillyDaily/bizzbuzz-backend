const env = 'development';
const config = require('./knexfile.js')[env];
const path = require('path');
const express = require('express');
// const fs = require('fs');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const logger = require('morgan');
const knex = require('./db/knex');
const app = express();
const AWS = require('aws-sdk');
const fileUpload = require('express-fileupload');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));
app.use(cors());
app.use(morgan(combine));

// New Middleware!
// app.use(fileUpload());
// app.set('view engine', 'ejs');

// AWS.config.loadFromPath('./config.json');
// var s3Bucket = new AWS.S3({params: {Bucket: "bizzbuzz"}});
// const baseAWSURL = "https://s3.amazonaws.com/bizzbuzz/"

app.use('/', require('./config/routes.js'));

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