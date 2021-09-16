const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bandera: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    area: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    poblacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    limitrofes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    }
  }, { timestamps: false, force: true });
};

// actividades: {
//   type: DataTypes.STRING,
//   allowNull: false,
// }