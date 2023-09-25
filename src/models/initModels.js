const Doctors = require('./doctor.model');
const Patients = require('./patients.model');
const NutritionPlans = require('./nutritionPlan.models');
const Messures = require('./messures.models');
const Documents = require('./documents.model');


const initModels = () => { 

    Doctors.hasMany(Patients, { foreignKey: 'doctorId'});     
    Patients.belongsTo(Doctors, { foreignKey: "doctorId"});  

    Patients.hasMany(NutritionPlans, {foreignKey: 'patientId'}); 
    NutritionPlans.belongsTo(Patients, {foreignKey: 'patientId'}); 
    
    NutritionPlans.hasMany(Messures, {foreignKey: 'nutritionPlanId'});  
    Messures.belongsTo(NutritionPlans, {foreignKey: 'nutritionPlanId'}); 

    NutritionPlans.hasMany(Documents, {foreignKey: 'nutritionPlanId'});
    Documents.belongsTo(NutritionPlans, {foreignKey:'nutritionPlanId'});
}
 
module.exports = initModels;