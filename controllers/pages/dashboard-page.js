const router = require('express').Router();
const { User, Animal } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const data = await User.findByPk(req.session.user_id, { include: [Animal] })
    const userData = data.get({plain: true})
    // console.log("dashboard user data!~~~ ",userData)

    res.render('dashboard', {
      userData,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
