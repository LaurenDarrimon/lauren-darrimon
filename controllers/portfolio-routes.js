const router = require('express').Router();
const { Project } = require('../models');
  
  //ONE PROJECT
  router.get('/:id', async (req, res) => {
    try {
      const projectData = await Project.findByPk(req.params.id, {
        include: [{ all: true, nested: true }],
      });
  
      const project = projectData.get({ plain: true });
  
      console.log("__________________________________");
      console.log('project:');
      console.log(project);
      console.log("__________________________________");
  
      res.render('one-project', { 
        project,});
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;