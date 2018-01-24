const knex = require('../db/knex')
const jwt = require('jsonwebtoken')

module.exports = function(type, creds, res) {
    return new Promise((resolve, reject) => {
        knex(type)
        .where('email', creds.email)
        .then(result => {
            // If error
            if(result.length < 1)  {
                res.status(500).send('blah')
            }
            // If bad password
            if(result.length > 0 && !creds.password) {
                res.status(401).send('unauthorized')
            }
            // If success
            var token = jwt.sign({result}, 'shhhhh');
            resolve(token)
        })
    })
}