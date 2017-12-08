const express = require('express');
const passport = require('passport');
const Rating = require('../models/Rating');
const User = require('../models/User');


const {ensureLoggedIn,ensureLoggedOut} = require('connect-ensure-login');
const rateRoutes = express.Router();

ratingRoutes.get('/:id', ensureLoggedIn(), (req, res, next) => {
Rating.findById(req.params.id, (err, rate) => {
    return res.status(200).json(rate);
  });
});

rateRoutes.post('/', ensureLoggedIn(), (req, res, next) => {

  let newRate = new Rate({
    project: req.body.name,
    user: req.user._id,
    rate: req.body.rate,
    comments: req.body.comments
  });

  newRate.save().then( createdRate => {
    return res.status(200).json(createdRate);
  });
});



module.exports = rateRoutes;
