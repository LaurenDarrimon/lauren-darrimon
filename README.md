# Lauren Darrimon Professional Portfolio
## Lauren Darrimon
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge&logo=appveyor)](https://opensource.org/licenses/MIT) ![Language Badges](https://img.shields.io/github/languages/top/laurenDarrimon/lauren-darrimon?style=for-the-badge&logo=appveyor) ![Commits Badge](https://img.shields.io/github/last-commit/laurenDarrimon/lauren-darrimon?style=for-the-badge&logo=appveyor) ![Repo Size](https://img.shields.io/github/repo-size/laurenDarrimon/lauren-darrimon?style=for-the-badge&logo=appveyor) ![Repo Issues](https://img.shields.io/github/issues/laurenDarrimon/lauren-darrimon?style=for-the-badge&logo=appveyor)
    
### Description
Full stack application serving up development project portfolio data via Express, MySQL, Sequeilze, and Handlebars.js using MVC architecture. 

![Project Portfolio Site gif](public/assets/images/portfolio.gif)

### Table of Contents

* [Link](#link)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Questions](#questions)
* [License](#license)


### Link 
🔗 
Link to application [Lauren Darrimon Professional Portfolio](https://quiet-river-08997.herokuapp.com/)


### Installation
🔧
If you plan to clone down this project for yourself, you need to install the following (dependencies): 
connect-session-sequelize, dotenv, express, express-handlebars, handlebars, mysql2, and sequelize. 

After you clone down the repository, you will need to create your own .env file with database, user, and password. Then, install the dependencies from the root directory with: 

~~~
npm install 
~~~

Then, move into the db/ directory and create the database in MySQL. 
~~~
mysql -u root -p
source schema.sql
~~~

Next, move back into the root directory and seed your database with the sample data. Or navigate to the seeds directory and add your own seed data, then: 

~~~
npm run seed
~~~


### Usage 
To enable the server from the command line: 

~~~
npm start
~~~


### Contributing 
✍️ 
Lauren Darrimon is the author of this application. Find additional work on Lauren Darrimon's [Github profile.](http://github.com/laurenDarrimon).

Follow these guildines for contributing to this project: 

### Tests
Instructions for testing: 


### Questions
❓💌
Reach out to Lauren Darrimon at hello@laurenlalita.com if you have any questions. 

### License
The license for this project is: [MIT](https://opensource.org/licenses/MIT)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge&logo=appveyor)](https://opensource.org/licenses/MIT)