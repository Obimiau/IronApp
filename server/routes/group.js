const express = require('express');
const passport = require('passport');
const User = require('../models/User');
const Group = require('../models/Group');

const {ensureLoggedIn,ensureLoggedOut} = require('connect-ensure-login');
const groupRoutes = express.Router();

groupRoutes.get('/:id/ranking', (req, res, next) => {
  User.find({group: req.params.id}, (err, users) => {
    users.sort( (a, b) => { b.score - a.score });
    return res.status(200).json({ users: users });
  });
});

groupRoutes.post('/', (req, res, next) => {

  let newGroup = new Group({
    name: req.body.name,
    type: req.body.type
  });

  newGroup.save().then( createdGroup => {
    return res.status(200).json(createdGroup);
  });
});



module.exports = groupRoutes;
