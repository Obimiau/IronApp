const express = require('express');
const passport = require('passport');
const User = require('../models/User');
const Project = require('../models/Project');

const {ensureLoggedIn,ensureLoggedOut} = require('connect-ensure-login');
const userRoutes = express.Router();

userRoutes.get('/:id', ensureLoggedIn(), (req, res, next) => {
  User.findById(req.params.id, (err, user) => {
    Project.find({author: req.params.id}, (err, projects) => {
      let modifiedUser = user.toObject();
      modifiedUser.projects = projects;
      return res.status(200).json(modifiedUser);
    });
  });
})

userRoutes.post('/edit', (req, res, next) => {

  User.findOneAndUpdate({_id: req.user._id}, { $set: {
    "fullName": req.body.fullName || req.user.fullName,
    "github_user": req.body.github_user || req.user.github_user,
    "codewars_user": req.body.codewars_user || req.user.codewars_user,
    "avatar": req.body.avatar || req.user.avatar,
  } }, {new: true})
  .then(createdUser => {
    res.status(200).json(createdUser);
  })
  .catch(e => {
      console.log(e)
      res.status(500).json({ message: 'Something went wrong' });
  });
});


module.exports = userRoutes;
