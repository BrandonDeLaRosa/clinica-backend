const { DataTypes } = require ('sequelize');
const db = require('../utils/database');

const Patients = db.define('Patients', {
    id: {
       type: DataTypes.INTEGER,
       primaryKey:true,
       autoIncrement: true,
       allowNull: false
    },
    name: {
        type: DataTypes.STRING(30),
    },
    lastname: {
        type: DataTypes.STRING(30)
    },
    email:{
        type: DataTypes.STRING(50),
        allowNull:false,
        unique:true,
        validate:{
            isEmail: true
        }
    },
    phone:{
        type: DataTypes.STRING,
        allowNull:false
    },
    location:{
        type: DataTypes.STRING,
        allowNull:false
    },
    description:{
        type: DataTypes.TEXT,
        allowNull:false
    },
    doctorId:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
},{
    timestamps:false
});

module.exports = Patients;