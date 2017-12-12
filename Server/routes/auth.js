const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const authRoutes = express.Router();

authRoutes.post('/signup', (req, res, next) => {
  const newUser = {
    username: req.body.username,
    fullName: req.body.fullName,
    group: req.body.group,
    codewars_user: req.body.codewars_user || null,
    github_user: req.body.github_user || null,
    fullName: req.body.github_user || null,
    avatar: req.body.avatar || '/imgs/no_image_user.png',
    score: req.body.score || 0
  };

  User.findOne({ username: newUser.username }, '_id')
  .then(user => {
    if (user) {
      res.status(400).json({ message: 'The username already exists' });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(req.body.password, salt);

    newUser.password = hashPass;
    const theUser = new User(newUser);
    return theUser.save();
  })
  .then(createdUser => {
    console.log(createdUser);
    res.status(200).json(createdUser);
  })
  .catch(e => {
      console.log(e)
      res.status(500).json({ message: 'Something went wrong' });
  });
});


authRoutes.post('/login', (req, res, next) => {
  console.log(req.body);
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({ message: 'Something went wrong' });
      return;
    }

    if (!theUser) {
      res.status(401).json(failureDetails);
      return;
    }

    req.login(theUser, (err) => {
      if (err) {
        res.status(500).json({ message: 'Something went wrong' });
        return;
      }


      res.status(200).json(req.user);
    });
  })(req, res, next);
});

authRoutes.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ message: 'Success' });
});


authRoutes.get('/loggedin', (req, res, next) => {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: 'Unauthorized' });
});


module.exports = authRoutes;
