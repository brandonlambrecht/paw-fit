const router = require('express').Router();
const userRoutes = require('./userRoutes');
const animalRoutes = require('./animal');
const health = require('./health');

router.use('/users', userRoutes);
router.use('/animals', animalRoutes)
router.use('/health', health);
module.exports = router;
