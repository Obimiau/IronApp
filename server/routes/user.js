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

module.exports = userRoutes;
