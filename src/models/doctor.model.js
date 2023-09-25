const { DataTypes } = require ('sequelize');
const db = require('../utils/database');
const bcrypt = require('bcrypt')

const Doctors = db.define('Doctors', {
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
    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique:true,
    },
    email:{
        type: DataTypes.STRING(50),
        allowNull:false,
        unique:true,
        validate:{
            isEmail: true
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    }
},{
    hooks:{
        beforeCreate: async (User) => {  //! <-- El parametro es una instancia de req.body.
            try {
                const salt = await bcrypt.genSalt(10);
                const passwordHash = await bcrypt.hash(User.password, salt);
                User.password = passwordHash
            } catch (error) {
                next({
                    status: 500,
                    message: error.message,
                    name: error.name
                })
            }
        }
    }
}
);

module.exports = Doctors;