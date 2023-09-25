const { DataTypes } = require ('sequelize');
const db = require('../utils/database');

const Messures = db.define('Messures', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull:false
    },
    fatPercentage: {
        type:DataTypes.FLOAT,
        allowNull:false,
    },
    musclePercentage: {
        type:DataTypes.FLOAT,
        allowNull:false,
    },
    waterPercentage: {
        type:DataTypes.FLOAT,
        allowNull:false,
    },
    bonePercentage : {
        type:DataTypes.FLOAT,
        allowNull:false,
    },
    nutritionPlanId: {
        type: DataTypes.INTEGER,
        allowNull:false
    }
    },{
        timestamps:false
    });

module.exports = Messures;