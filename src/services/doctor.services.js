const Doctors = require('../models/doctor.model');


class DoctorServices {
    
    static async getAllDoctors(){
        try {
            const doctors = await Doctors.findAll()
            return doctors
        } catch (error) {
            throw(error)
        }
    }

    static async getOne(id){
        try {
            const doctor = await Doctors.findByPk(id);
            return doctor
        } catch (error) {
            throw(error)
        }
    }

    static async createDoctor(newDoctor){
        try {
            const doctorCreated = await Doctors.create(newDoctor)
            return doctorCreated
        } catch (error) {
            throw(error)
        }
    }

    static async getDoctor(username){
        try {
            const doctor = await Doctors.findOne({
                where: {username}
            })
            return doctor
        } catch (error) {
            throw (error)
        }
    }
}

module.exports = DoctorServices;




    