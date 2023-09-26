const { Router } = require('express');
const { getAllPatients, createPatient, getPatient, getPatientByName } = require('../controllers/patients.controller');


const router= Router();

router.get('/api/v1/patients', getAllPatients);
router.post('/api/v1/create-patient', createPatient);
router.get('/api/v1/patient/:id', getPatient);
router.post('/api/v1/patient-name', getPatientByName);
//? Obtencion de un post por su id con todas sus respuestas

module.exports= router;