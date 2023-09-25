const { DataTypes } = require('sequelize');
const db = require('../utils/database'); 

const Documents = db.define('Documents', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
  contenido: {
    type: DataTypes.BLOB, 
    allowNull: false,
  },
  nutritionPlanId: {
      type: DataTypes.INTEGER,
      allowNull:false
  }
});

module.exports = Documents;
