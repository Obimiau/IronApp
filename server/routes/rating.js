const express = require('express');
const passport = require('passport');
const Rating = require('../models/Rating');
const User = require('../models/User');


const {ensureLoggedIn,ensureLoggedOut} = require('connect-ensure-login');
const rateRoutes = express.Router();

rateRoutes.get('/:id', ensureLoggedIn(), (req, res, next) => {
Rating.findById(req.params.id, (err, rate) => {
    return res.status(200).json(rate);
  });
});

rateRoutes.post('/', ensureLoggedIn(), (req, res, next) => {
  let newRate = new Rating({
    project: req.body.project,
    user: req.user._id,
    rate: req.body.rate,
    comment: req.body.comment
  });
  console.log("at least");

  newRate.save().then( createdRate => {
    return res.status(200).json(createdRate);
  });
});


module.exports = rateRoutes;
