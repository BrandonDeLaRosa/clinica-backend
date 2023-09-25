const Plan = require('../models/nutritionPlan.models')

class PlanServices {

    static async getAll(){
        try {
            const plans = await Plan.findAll();
            return(plans)
        } catch (error) {
            throw(error)
        }
    } 

    static async create(newPlan){
        try {
            const result = await Plan.create(newPlan);
        return result;
        } catch (error) {
            throw(error)
        }
    }
}
module.exports= PlanServices;