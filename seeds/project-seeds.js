const { Project } = require('../models/');

//seed Project Model with this data

const projectData = [
  {
    title: "The Rubber Duck Tech Blog",
    description: "Full-stack CMS-style blog site where developers can publish and comment, using MVC architectural structure, Handlebars.js, Sequelize, and express-session.",
    repo_url: "https://github.com/LaurenDarrimon/tech-blog",
    deployed_url: "https://vast-chamber-35721.herokuapp.com/",
    image_path: "/assets/images/rubber-duck.png",
  },
  {
    title: "Map-A-Test - Find COVID Testing",
    description: "Find nearby COVID tests sites geographically using Google Maps API and Here Developer API ",
    repo_url: "https://github.com/LaurenDarrimon/find-covid-testing",
    deployed_url: "https://laurendarrimon.github.io/find-covid-testing/",
    image_path: "/assets/images/map-test.png",
  },
  {
    title: "Neighborgood! A Community Sharing App",
    description: "Full-stack application where users can post and claim gently used items offered by the community. Uses MVC architectural structure, Bootstrap, Handlebars.js, Sequelize, and express-session.",
    repo_url: "https://github.com/LaurenDarrimon/community-share",
    deployed_url: "https://hidden-forest-09542.herokuapp.com//",
    image_path: "/assets/images/neighborgood.png",
  },
 
 
];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;