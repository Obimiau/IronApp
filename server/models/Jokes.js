const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const jokeSchema = new Schema({
  description: {type: String, require: true}
});

const Joke = mongoose.model('Joke', jokeSchema);
module.exports = Joke;
