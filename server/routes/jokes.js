const express = require('express');
const passport = require('passport');
const Joke = require('../models/Jokes');

const {
  ensureLoggedIn,
  ensureLoggedOut
} = require('connect-ensure-login');
const jokeRoutes = express.Router();


jokeRoutes.get('/', ensureLoggedIn(), (req, res, next) => {
  Joke.find({}, (err, jokes) => {
    const idx = Math.floor(Math.random() * jokes.length);
    return res.status(200).json(jokes[idx]);
  });
});

jokeRoutes.post('/', ensureLoggedIn(), (req, res, next) => {

  let newJoke = new Joke({
    description: req.body.name
  });

  newJoke.save().then(createdJoke => {
    return res.status(200).json(createdJoke);
  });
});



module.exports = jokeRoutes;
