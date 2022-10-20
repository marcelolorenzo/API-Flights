'use strict';

const Flights = require("../models/Flights");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_pedido: {
        type: Sequelize.DATEONLY
      },
      valor: {
        type: Sequelize.INTEGER
      },
      id_customers: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Customers",
          key: "id"
        }
      },
      id_voos: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Flights",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};