const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
  try {

    const userData = await User.findByPk(req.session.user_id, { raw: true })

    // get info



    res.render('dashboard', {
      userData,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
