const express = require('express');
const passport = require('passport');
const admin = require("firebase-admin");
const User = require('../models/User');
const Group = require('../models/Group');
const Project = require('../models/Project');

const {
  ensureLoggedIn,
  ensureLoggedOut
} = require('connect-ensure-login');
const groupRoutes = express.Router();

var serviceAccount = require("../IronApp-2be5422668c9.json");

// Initialize firebase application with credentials json
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ironapp-ec1a6.firebaseio.com",
});

// Connect firebase to database
const defaultDatabase = admin.database();

groupRoutes.post('/rate/:id', ensureLoggedIn(), (req, res, next) => {
  console.log(req.user.group);
  let ref = defaultDatabase.ref(req.user.group + '/projects/');
  ref.child(`${req.params.id}/valorations/${req.user.id}`).set({
    rate: req.body.rate,
    comment: req.body.comment,
  }).then(() => {
    return res.status(200);
  });

});

groupRoutes.post('/present/:id', ensureLoggedIn(), (req, res, next) => {
  let ref = defaultDatabase.ref(req.params.id);
  // SET (id)/presenting to true in firebase
  ref.child('presenting').set(true);
  User.find({
    group: req.params.id
  }, {
    '_id': 1
  }, (err, users) => {
    let userIds = [];
    // Create a id's list
    users.forEach((elem) => {
      userIds.push(elem._id);
    });

    Project.find({
      author: {
        $in: userIds
      }
    }, (err, projects) => {
      ref.child('presentingProject').set(0);
      ref.child('projects').set(projects.map((e) => e.toObject()));
      return res.status(200).json({
        projects
      });
    });

  });
});

groupRoutes.get('/ranking', ensureLoggedIn(), (req, res, next) => {
  User.find({
    group: req.user.group
  }).sort({
    'score': 1
  }).then((users) => {
    return res.status(200).json({
      users: users
    });
  });
});

groupRoutes.get('/', ensureLoggedIn(), (req, res, next) => {
  Group.findById(req.user.group, (req, group) => {
    return res.status(200).json(group);
  })
});

groupRoutes.post('/', ensureLoggedIn(), (req, res, next) => {

  let newGroup = new Group({
    name: req.body.name,
    type: req.body.type
  });

  newGroup.save().then(createdGroup => {
    return res.status(200).json(createdGroup);
  });
});

module.exports = groupRoutes;
