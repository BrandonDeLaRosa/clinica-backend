const { Router } = require('express');
const { getAllPatients, createPatient } = require('../controllers/patients.controller');



const router= Router();

router.get('/api/v1/patients', getAllPatients);
router.post('/api/v1/create-patient', createPatient);
//? Obtencion de un post por su id con todas sus respuestas

module.exports= router;