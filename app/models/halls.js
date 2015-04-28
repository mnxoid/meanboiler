var mongoose = require('mongoose');

module.exports = mongoose.model('Hall', {
  name     : {type: String, default: ''},
  location : {type: String, default: ''},
  pic      : {type: String, default: 'http://lorempixel.com/160/200/city/1'},
  capacity : Number,
  price    : Number
});
