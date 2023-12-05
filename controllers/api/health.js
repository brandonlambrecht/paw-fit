const router = require('express').Router();
const { Health } = require('../../models');

//  /api/health
router.post('/', async (req, res) => {
    try {
        if(req.session.user_id){
            req.body.user_id = req.session.user_id
            const healthData = await Health.create(req.body);

            res.status(200).json(healthData);
        }
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});