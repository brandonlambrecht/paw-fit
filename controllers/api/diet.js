const router = require('express').Router();
const { Diet } = require('../../models');

// /api/diet
router.post('/', async (req, res) => {
    try {
        if(req.session.user_id) {
            req.body.user_id = req.session.user_id;
            console.log(req.body);
            const dietData = await Diet.create(req.body);

            res.status(200).json(dietData);
        }
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.delete('/:id', async(req, res) => {
    try {
        
    } catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
})

module.exports = router;