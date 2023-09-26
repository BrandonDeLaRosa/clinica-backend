const {Router} = require('express');
const doctorLogin = require('../controllers/auth.controller');

const router = Router();
router.post('/api/v1/auth/login', doctorLogin)


module.exports = router