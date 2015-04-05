var mongoose = require('mongoose');

module.exports = mongoose.model('Hall', {
  name     : {type: String, default: ''},
  location : {type: String, default: ''},
  capacity : Number,
  price    : Number
});
