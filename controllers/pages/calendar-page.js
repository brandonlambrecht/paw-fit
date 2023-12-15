const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req,res) => {
    try {
        const data = await User.findByPk(req.session.user_id)

        res.render('Calendar', {})
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;