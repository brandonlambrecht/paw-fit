const router = require('express').Router();
const { Animal } = require('../../models');


// /api/animals
router.post('/', async (req, res) => {
  try {
    if(req.session.user_id){
      req.body.user_id = req.session.user_id
    const animalData = await Animal.create(req.body);

    res.status(200).json(animalData);
  }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    if(req.session.user_id){
      req.body.user_id = req.session.user_id
    const animalData = await Animal.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    res.status(200).json(animalData);
  }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.delete('/:id', async(req, res) => {
  try {
    if(req.session.user_id) {
      req.body.user_id = req.session.user_id
      const animalData = await Animal.destroy({
        where: {
          id: req.params.id
        },
      });
      if (!animalData) {
        res.status(400).json({ message: 'No Animal found with that id! '});
        return;
      }

      res.status(200).json(animalData);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
})


module.exports = router;