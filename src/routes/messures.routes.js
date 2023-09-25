const {Router} = require('express');
const { getMessures, createMessures } = require('../controllers/messures.controller');

const router = Router();

router.get('/api/v1/messures', getMessures)
router.post('/api/v1/create-messure', createMessures)

module.exports = router;