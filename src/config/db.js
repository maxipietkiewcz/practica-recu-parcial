const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
  }
);

const db_connection = () => {
  try {
    sequelize.sync({ force: false });
    console.log("Base de datos sincronizada.");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sequelize,
  DataTypes,
  db_connection,
};
