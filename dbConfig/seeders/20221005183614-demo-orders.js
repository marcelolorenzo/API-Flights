'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert(
      "Orders", 
     [
      {
      id_voos: "1",
      id_customers: "1", 
      data_pedido: new Date ("01/01/2001"),
      valor: "1000",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_voos: "2",
      id_customers: "2", 
      data_pedido: new Date("01/01/2002"),
      valor: "2000",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_voos: "3",
      id_customers: "3", 
      data_pedido: new Date ("01/01/2003"),
      valor: "3000",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ])
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
