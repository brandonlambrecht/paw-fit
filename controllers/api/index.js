const router = require('express').Router();
const userRoutes = require('./userRoutes');
const animalRoutes = require('./animal');
const healthRouter = require('./health');
const dietRouter = require('./diet')

router.use('/users', userRoutes);
router.use('/animals', animalRoutes)
router.use('/health', healthRouter);
router.use('/diet', dietRouter)

module.exports = router;
