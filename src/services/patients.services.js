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

    static async getOne(id){
        try {
            const patient = await Patients.findByPk(id);
            return patient
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
    
    static async getPatient(name){
        try {
            const patient = await Patients.findOne({
                where:{name}
            });
            return patient
        } catch (error) {
            throw(error)
        }
    }
    
    static async getPatientByName(name) {
        try {
          const patient = await Patients.findOne({
            where: { name },
          });
          return patient;
        } catch (error) {
          throw error;
        }
      }
}
  
  module.exports = PatientServices;


module.exports = PatientServices;