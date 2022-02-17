const router = require('express').Router();
const { Project } = require('../models');
  
  //ONE PROJECT
  router.get('/item/:id', async (req, res) => {
    try {
      const itemData = await Item.findByPk(req.params.id, {
        include: [{ all: true, nested: true }],
      });
  
      const item = itemData.get({ plain: true });
  
      console.log("__________________________________");
      console.log('item:');
      console.log(item);
      console.log("__________________________________");
  
      res.render('item', { 
        item,
        user_id: req.session.user_id,
        logged_in: req.session.logged_in, });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;