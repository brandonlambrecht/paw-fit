const router = require('express').Router();
const { Health } = require('../../models');

//  /api/health
router.post('/', async (req, res) => {
    try {
        if(req.session.user_id){
            req.body.user_id = req.session.user_id;
            console.log(req.body);
            const healthData = await Health.create(req.body);

            res.status(200).json(healthData);
        }
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.delete('/:id', async(req, res) => {
    try {
        if (req.session.user_id) {
            const healthData = await Health.destroy({
                where: {
                    id: req.params.id
                },
            });
            if (!healthData) {
                res.status(400).json({message: 'no Health record with this Id! '});
                return;
            }

            res.status(200).json(healthData);
        }
    } catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
})

module.exports = router;