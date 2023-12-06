const router = require('express').Router();
const { User, Animal, Activity, Health, Diet } = require('../../models');

// Use withAuth middleware to prevent access to route
router.get('/', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const data = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ 
        model: Animal, 
        include: [Health, Activity, Diet]
      }],
    });

    const userData = data.get({plain: true})


    console.log(userData);

    res.render('profile', {
      ...userData,
      logged_in: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
