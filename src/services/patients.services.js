const Patients = require('../models/patients.model')


class PatientServices{

    static async getAllPatients(){
        try {
            const result = await Patients.findAll();
            return result
        } catch (error) {
            throw(error)
        }
    }

    static async createPatient(newPatient) {
        try {
            const patientCreated = await Patients.create(newPatient)
            return patientCreated
        } catch (error) {
            throw(error)   
        }
    }
    
}

module.exports = PatientServices;