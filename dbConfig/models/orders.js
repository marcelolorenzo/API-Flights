'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    
    static associate(models) {
      Orders.belongsTo(models.Customers, {
        foreignKey: "id_customers"
      });
      Orders.belongsTo(models.Flights, {
        foreignKey: "id_voos"
      });
    }
  }
  Orders.init({
    data_pedido: DataTypes.DATEONLY,
    valor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Orders',
    paranoid: true
  });
  return Orders;
};