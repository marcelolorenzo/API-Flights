'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */ await queryInterface.bulkInsert(
      "Flights", 
     [
      {
      numero_voo: "8001",
      aeronave: "AirBus",
      destino: "Developer",
      companhia: "Infnet Airlines",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      numero_voo: "8002",
      aeronave: "Boeing",
      destino: "Portugal",
      companhia: "Air Frania",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      numero_voo: "8003",
      aeronave: "Boeing",
      destino: "Rio",
      companhia: "Fly Brazil",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
