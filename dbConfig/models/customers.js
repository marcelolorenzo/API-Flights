'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customers extends Model {
    
    static associate(models) {
      Customers.belongsToMany(models.Flights, {
        as: "orders",
        through: "Orders",
        foreignKey: "id_voos",
      });
    }
  }
  Customers.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'Customers',
    paranoid: true,
    defaultScope: {
      where: {
        ativo: true
      }
    },
    scopes: {
      all: {
        where: {}
      },
      allFalse: {
        where: {
          ativo: false
        }
       }
      }
  });
  return Customers;
};