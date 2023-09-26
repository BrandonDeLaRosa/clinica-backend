const { Router } = require ('express');
const { getDoctors, createDoctor, getDoctor} = require('../controllers/doctor.controller');
const doctorLogin = require('../controllers/auth.controller');



const router = Router();

router.get('/api/v1/doctors', getDoctors);
router.post('/api/v1/create-doctor', createDoctor);
router.get ('/api/v1/doctor/:id', getDoctor);
router.post('/api/v1/auth/login', doctorLogin);

module.exports = router;