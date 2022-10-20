'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flights extends Model {
    
    static associate(models) {
      Flights.belongsToMany(models.Customers, {
        as: "flights_orders",
        through: "Orders",
        foreignKey: "id_customers"
      });
    } 
  }
  Flights.init({
    numero_voo: DataTypes.INTEGER,
    aeronave: DataTypes.STRING,
    destino: DataTypes.STRING,
    companhia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Flights',
    paranoid: true
  });
  return Flights;
};