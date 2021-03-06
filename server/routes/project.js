const express = require('express');
const passport = require('passport');
const Project = require('../models/Project');

const {
  ensureLoggedIn,
  ensureLoggedOut
} = require('connect-ensure-login');
const projectRoutes = express.Router();


projectRoutes.get('/own', ensureLoggedIn(), (req, res, next) => {
  Project.find({author: req.user.id}, (err, projects) => {
    return res.status(200).json(projects);
  });
});

projectRoutes.get('/:id', ensureLoggedIn(), (req, res, next) => {
  Project.findById(req.params.id, (err, project) => {
    return res.status(200).json(project);
  });
});

projectRoutes.post('/', ensureLoggedIn(), (req, res, next) => {

  let newProject = new Project({
    name: req.body.name,
    author: req.user._id,
    image: req.body.image || '/assets/imgs/Batmobile_Blueprint.jpg',
    description: req.body.description
  });

  newProject.save().then(createdProject => {
    return res.status(200).json(createdProject);
  });
});

module.exports = projectRoutes;
