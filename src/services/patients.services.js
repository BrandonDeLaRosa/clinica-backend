const Messures = require('../models/messures.models');
const NutritionPlans = require('../models/nutritionPlan.models');
const Patients = require('../models/patients.model')


class PatientServices{

    static async getAllPatients(){
        try {
            const result = await Patients.findAll({
                include:[
                    {
                        model: NutritionPlans,
                        // attributes:["id","weight","height","nextAppointment","weeklyObjectives","comments"],
                        include:[{
                            model: Messures,
                        }]
                    }
                ]
            });
            return result
        } catch (error) {
            throw(error)
        }
    }

    static async getOne(id){
        try {
            const patient = await Patients.findByPk(id,{
                include:[
                    {
                        model: NutritionPlans,
                        // attributes:["id","weight","height","nextAppointment","weeklyObjectives","comments"],
                        include:[{
                            model: Messures,
                        }]
                    }
                ]
            });
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
    
    // static async getPatient(name){
    //     try {
    //         const patient = await Patients.findOne({
    //             where:{name}
    //         });
    //         return patient
    //     } catch (error) {
    //         throw(error)
    //     }
    // }
    
    static async getPatientByName(name) {
        try {
          const patient = await Patients.findOne({
            where: { name },
            include: [
              {
                model: NutritionPlans,
                include: [
                  {
                    model: Messures,
                  },
                ],
              },
            ],
          });
          return patient;
        } catch (error) {
          throw error;
        }
      }
      
}
  
  module.exports = PatientServices;


module.exports = PatientServices;