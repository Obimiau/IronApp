const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ironapp', {useMongoClient: true});
const Joke = require('../models/Jokes');

const jokes = [
  {
    description: 'Q. How do you comfort a JavaScript bug? A. You console it'
  },
  {
    description: 'When a JavaScript date has gone bad, Dont call me, I will callback you. I promise'
  },
  {
    description: 'Q. Why was the JavaScript developer sad? A. Because he didnt Node how to Express himself'
  },
  {
    description: 'Q. Why did the JavaScript boxer goto the chiropractor? A. Because his backbone was angular from a knockout and required attention'
  },
  {
    description: 'Q. Why was Ember.js turning red? A. Because it was EMBERrassed for not remEMBERing its route home'
  },
  {
    description: 'Q. Why did the developer go broke? A. Because he used up all his cache'
  },
];

Joke.collection.drop();

Joke.create(jokes, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((joke) => {
    console.log(joke);
  });

  mongoose.connection.close();
});
