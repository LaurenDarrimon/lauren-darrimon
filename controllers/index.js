const router = require('express').Router();

const homeRoutes = require('./home-routes');
const portfolioRoutes = require('./portfolio-routes');

router.use('/', homeRoutes);
router.use('/portfolio', portfolioRoutes);

module.exports = router;