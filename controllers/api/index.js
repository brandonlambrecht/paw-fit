const router = require('express').Router();
const userRoutes = require('./userRoutes');
const animalRoutes = require('./animal');

router.use('/users', userRoutes);
router.use('/animals', animalRoutes)

module.exports = router;
