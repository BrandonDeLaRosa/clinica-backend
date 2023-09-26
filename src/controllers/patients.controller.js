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

const getPatient = async (req,res) => {
    try {
        const {id} = req.params;
        const result = await PatientServices.getOne(id);
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getPatientByName = async (req, res) => {
  try {
    const { name } = req.body; 
    const patient = await PatientServices.getPatientByName(name);

    if (!patient) {
      return res.status(404).json({ message: 'Paciente no encontrado' });
    }

    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = {
  createPatient,
  getPatient,
  getAllPatients,
  getPatientByName
};


// module.exports = { 
//     createPatient, 
//     getPatient,
//     getAllPatients,
// }