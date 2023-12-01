const router = require('express').Router();
const { Animal } = require('../../models');


// /api/animals
router.post('/', async (req, res) => {
  try {
    const animalData = await Animal.create(req.body);

    res.status(200).json(animalData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});


module.exports = router;