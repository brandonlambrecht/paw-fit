const router = require('express').Router();
const userRoutes = require('./userRoutes');
const animalRoutes = require('./animal');
const healthRouter = require('./health');
const dietRouter = require('./diet')
const activityRouter = require('./activity')

router.use('/users', userRoutes);
router.use('/animals', animalRoutes)
router.use('/health', healthRouter);
router.use('/diet', dietRouter)
router.use('/activities', activityRouter)

module.exports = router;
