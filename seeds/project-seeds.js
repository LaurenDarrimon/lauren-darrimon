const { Project } = require('../models/');

//seed Project Model with this data

const projectData = [
  {
    title: "The Rubber Duck Tech Blog",
    description: "Full-stack CMS-style blog site where developers can publish and comment, using MVC architectural structure, Handlebars.js, Sequelize, and express-session.",
    repo_url: "https://github.com/LaurenDarrimon/tech-blog",
    deployed_url: "https://vast-chamber-35721.herokuapp.com/",
    image_path: "public/assets/images/tech-blog.jpg",
  },
  {
    title: "The Rubber Duck Tech Blog",
    description: "Full-stack CMS-style blog site where developers can publish and comment, using MVC architectural structure, Handlebars.js, Sequelize, and express-session.",
    repo_url: "https://github.com/LaurenDarrimon/tech-blog",
    deployed_url: "https://vast-chamber-35721.herokuapp.com/",
    image_path: "public/assets/images/tech-blog.jpg",
  },
  {
    title: "The Rubber Duck Tech Blog",
    description: "Full-stack CMS-style blog site where developers can publish and comment, using MVC architectural structure, Handlebars.js, Sequelize, and express-session.",
    repo_url: "https://github.com/LaurenDarrimon/tech-blog",
    deployed_url: "https://vast-chamber-35721.herokuapp.com/",
    image_path: "public/assets/images/tech-blog.jpg",
  },
 
 
];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;