const router = require('express').Router();

router.get('/', async (req, res) => {
  try {

    // get info


    res.render('dashboard', {
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
