const router = require('express').Router();

const userRoutes = require('./use-routes');
 //const recipeRoutes=require('./blog-routes')

router.use('/users', userRoutes);
 //router.use('/blog',recipeRoutes);
module.exports = router;