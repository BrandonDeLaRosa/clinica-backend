const { DataTypes } = require ('sequelize');
const db = require('../utils/database');

const NutritionPlans = db.define('NutritionPlans', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
     },
     image: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    weight: {
        type: DataTypes.FLOAT,
        allowNull:false
    },
    height: {
        type: DataTypes.FLOAT,
        allowNull:false
    },
    nextAppointment: {
        type: DataTypes.STRING,
        allowNull:false
    },
    weeklyObjectives: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    comments: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    patientId:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },

});

module.exports = NutritionPlans; 


/*
{"content": "No lo se brou, quizas no has dormido por programar","author": 1, "postId": 3}


// */