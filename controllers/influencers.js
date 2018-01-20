const knex = require("../db/knex.js");

module.exports = {
  redirect: function(req, res) {
    res.redirect('/');
  },

}