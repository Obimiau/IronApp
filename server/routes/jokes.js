const express = require('express');
const passport = require('passport');
const Joke = require('../models/Jokes');

const {
  ensureLoggedIn,
  ensureLoggedOut
} = require('connect-ensure-login');
const jokeRoutes = express.Router();


jokeRoutes.get('/:id', ensureLoggedIn(), (req, res, next) => {
  Jokes.findById(req.params.id, (err, project) => {
    return res.status(200).json(project);
  });
});

jokeRoutes.post('/', ensureLoggedIn(), (req, res, next) => {

  let newJoke = new Joke({
    description: req.body.name
  });

  newProject.save().then(createdProject => {
    return res.status(200).json(createdProject);
  });
});



module.exports = jokeRoutes;
