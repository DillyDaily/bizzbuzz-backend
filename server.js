
const env = 'development';
const config = require('./knexfile.js')[env];
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt-nodejs')
const fileUpload = require('express-fileupload');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));
app.use(cors());

var routes_setter = require('./config/routes.js');
routes_setter(app);

app.listen(port, function () {
  console.log("running on localhost:"+port);
})