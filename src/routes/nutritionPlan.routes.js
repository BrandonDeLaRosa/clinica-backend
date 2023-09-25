const  { Router } = require('express');
const { createNutritionPlan, getAllPlans } = require('../controllers/nutritionPlan.controller');


const router = Router();

router.get('/api/v1/plans', getAllPlans);
router.post('/api/v1/create-plan', createNutritionPlan);

module.exports = router; 