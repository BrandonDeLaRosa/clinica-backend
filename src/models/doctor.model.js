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






// const db = require('../utils/database');
// const { DataTypes, Model } = require ('sequelize');
// const bcrypt = require('bcrypt');
// const connection = require ("../connection.js");

// class Doctors extends Model { }

// Doctors.init({

//     docId: {
//        type: DataTypes.INTEGER,
//        primaryKey:true,
//        autoIncrement: true,
//        allowNull: false
//     },
//     name: {
//         type: DataTypes.STRING(30),
//     },
//     lastname: {
//         type: DataTypes.STRING(30)
//     },
//     username: {
//         type: DataTypes.STRING(30),
//         allowNull: false,
//         unique:true,
//     },
//     email:{
//         type: DataTypes.STRING(50),
//         allowNull:false,
//         unique:true,
//         validate:{
//             isEmail: true
//         }
//     },
//     password:{
//         type: DataTypes.STRING,
//         allowNull:false
//     }
// },{
//     hooks:{
//         beforeCreate: async (User) => {  //! <-- El parametro es una instancia de req.body.
//             try {
//                 const salt = await bcrypt.genSalt(10);
//                 const passwordHash = await bcrypt.hash(User.password, salt);
//                 User.password = passwordHash
//             } catch (error) {
//                 next({
//                     status: 500,
//                     message: error.message,
//                     name: error.name
//                 })
//             }
//         }
//     }
// },{
//     sequelize: connection,
//     modelName: 'Doctors',
//     tableName: 'Doctors',
//     timestamps: false,
//     createdAt: false,
//     updatedAt: false,
//     collate: 'utf8_general_ci',
//     freezeTableName: true,
//     underscored: false,
//     charset: 'utf8',
// }
// );

 
// export default Doctors;