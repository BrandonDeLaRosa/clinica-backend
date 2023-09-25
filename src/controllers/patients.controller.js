const PatientServices = require('../services/patients.services')

const getAllPatients = async (req,res) => {
    try {
        
        const patients = await PatientServices.getAllPatients();
        res.status(201).json(patients)
    } catch (error) {
        res.status(400).json(error)
    }
}

const createPatient = async (req,res) =>{
    try {
        const newPatient = req.body;
        const patient = await PatientServices.createPatient(newPatient);
        res.status(201).json(patient)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    createPatient,
    getAllPatients,
}