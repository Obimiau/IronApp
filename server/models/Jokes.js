const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const jokeSchema = new Schema({
  title: {type: String, require: true},
  description: {type: String, require: true}
});

const Joke = mongoose.model('Joke', jokeSchema);
module.exports = Joke;
