const { Project } = require('../models/');

//seed Project Model with this data

const projectData = [
  {
    title: "The Rubber Duck Tech Blog",
    description: "Full-stack CMS-style blog site where developers can publish and comment, using MVC architectural structure, Handlebars.js, Sequelize, and express-session.",
    details:"Tech blog where developers come to share, learn, and debug with each other and/or anthropomorphic ducks we find on our desks.",
    repo_url: "https://github.com/LaurenDarrimon/tech-blog",
    deployed_url: "https://vast-chamber-35721.herokuapp.com/",
    image_path: "/assets/images/rubber-duck.png",
    big_picture:"/assets/images/tech-color.jpg",
  },
  {
    title: "Map-A-Test - Find COVID Testing",
    description: "Find nearby COVID tests sites geographically using Google Maps API and Here Developer API ",
    details:"Once the users location is determined through geolocation or direct input, they will be able to view test site information either on the map directly or on the side panel that will appear. Both options will have the name of the test site, as well as an approximate location and phone number.",
    repo_url: "https://github.com/LaurenDarrimon/find-covid-testing",
    deployed_url: "https://laurendarrimon.github.io/find-covid-testing/",
    image_path: "/assets/images/map-test.png",
    big_picture:"/assets/images/test-color.jpg",
  },
  {
    title: "Neighborgood! A Community Sharing App",
    description: "Full-stack application where users can post and claim gently used items offered by the community. Uses MVC architectural structure, Bootstrap, Handlebars.js, Sequelize, and express-session.",
    details:"We used Cloudinary for cloud storage and retrieval of user posted item photos. Cloudinary Upload widget for logged in users to post photos when they post an item.",
    repo_url: "https://github.com/LaurenDarrimon/community-share",
    deployed_url: "https://hidden-forest-09542.herokuapp.com//",
    image_path: "/assets/images/neighborgood.png",
    big_picture:"/assets/images/share-color.jpg",
  },
 
 
];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;