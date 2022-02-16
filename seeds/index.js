//import requreed seed files 

const seedProjects = require('./project-seeds');

//connect to the database 
const sequelize = require('../config/connection');

const seedAll = async () => {

  await sequelize.sync({ force: true });
  console.log('\n --- DATABASE SYNCED ----\n');

  await seedProjects();
  console.log('\n----- PROJECTS SEEDED ---\n');

  process.exit(0);
};

//function to run all the seed js files, filling our database tables with seed data
seedAll();