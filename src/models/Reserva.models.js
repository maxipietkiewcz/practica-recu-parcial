const { sequelize, DataTypes } = require("../config/db.js");

const Reserva = sequelize.define(
  "Reserva",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_reserva: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    createdAt: true,
    updatedAt: true,
  }
);

module.exports = Reserva;
