const NutritionPlan = require('../services/nutritionPlan.service')

const getAllPlans = async (req,res) => {
    try {
        const plans = await NutritionPlan.getAll();
        res.status(201).json(plans)
    } catch (error) {
        res.status(400).json(error);
    }
}

const createNutritionPlan = async (req,res) => {
    try {
        const newPlan = req.body;
        const plan = await NutritionPlan.create(newPlan)
        res.status(201).json(plan)
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports= {
    getAllPlans,
    createNutritionPlan
}