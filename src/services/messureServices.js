const Messures = require('../models/messures.models');


class MessureServices{
    static async getAllMessures(){
        try {
            const messures = await Messures.findAll()
            return messures
        } catch (error) {
            throw(error)
        }
    }

    static async createMessures(newMessures){
        try {
            const doctorCreated = await Messures.create(newMessures)
            return doctorCreated
        } catch (error) {
            throw(error)
        }
    }
}

module.exports= MessureServices;