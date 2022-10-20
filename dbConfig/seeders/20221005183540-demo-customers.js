'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Customers", 
     [
      {
      nome: "Marcelo",
      email: "marcelo@gmail.com",
      cpf: "111",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: "Frania",
      email: "frania@gmail.com",
      cpf: "222",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: "Alexandre",
      email: "alexandre@gmail.com",
      cpf: "333",
      createdAt: new Date(),
      updatedAt: new Date()
    }],{});
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
