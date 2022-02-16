const router = require('express').Router();
const { Project } = require('../models');

//SHOW ALL LOCATIONS
router.get('/', async (req, res) => {
  try {
    // Get project data
    const projectData = await Project.findAll();

    //map project data into new array that can be read by handlebars
    const projects = projectData.map((project) => project.get({ plain: true }));
    
    console.log(projects);

    // Pass data to handlbars to render 
    res.render('home', { projects });
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;