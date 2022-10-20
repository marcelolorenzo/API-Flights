const database = require ("../../../dbConfig/models");
const validator = require ("validator");


class CustomersController {

        static async getAll(req, res) {
            try {
                const allCustomers = await database.Flights.findAll()
                return res.status(200).send(allCustomers); 
            } catch (error) {
                return res.status(500).send(error.message);
            }
        }

        static async getOne(req,res) {
            const { customersId } = req.params;
            try {
                const customers = await database.Flights.findOne({
                    where: {
                        id: Number(customersId)
                    }
                });

                if(!customers) {
                    return res.status(404).send("Pessoa não existe, tente outro id.");
                }
                return res.status(200).send(customers);
            } catch (error) {
                return res.status(500).send(error.message);
            }
        }

        static async createCustomer(req, res) {
            const {numerodoVoo, aeronave, destino, companhia} = req.body;

            try {
                const verifyingUser = await database.Customers.findOne({
                    where: {
                        email: email
                    }
                });
    
                if (verifyingUser) {
                    return res.send("O usuário já está cadastrado.", {verifyingUser});
                }
                const customers = await database.Customers.create({
                    numerodoVoo,
                     aeronave,
                      destino, 
                      companhia
                    });
                return res
                .status(200)
                .send({msg: " cadastrada com sucesso.", ...customers}); 
            } catch (error) {
                return res.status(500).send(error.message);
            }
        }

        static async editCustomer(req, res) {
            const { customersId } = req.params;
            const newCustomer = req.body;
            try {
                await database.Flights.update(newCustomer, {
                    where: {
                        id: Number(customersId)
                    }
            });

            const updatedCustomer = await database.Flights.findOne({
                where: {
                    id: Number(customersId)
                }
            });
            return res.status(200).send({msg: "Pessoa atualizada com sucesso!", ...updatedCustomer});

            } catch (error) {
                return res.status(500).send(error.message);
            }
        }

            static async deleteCustomer(req, res) {
                const { customersId } = req.params
                try {
                    await database.Customers.destroy({
                        where: {
                            id: Number(customersId)
                        }
                    });
                    return res.status(200).send(" deletada com sucesso.")
                } catch (error) {
                    return res.status(500).send(error.message);
                }
            } 

            static async restoreCustomer(req, res) {
                const { customersId } = req.params;
                try {
                  await database.Customers.restore({
                    where: {
                      id: Number(customersId)
                    }
                  });
                  return res.status(200).send({ msg: "Customer restaurado com sucesso!" });
                } catch (error) {}
              }
            

            static async getOrders(req,res) {
                const {id_customers, id_voos} = req.params;
                try {
                    const oneOrder = await database.Orders.findOne({
                        where: {
                            id: Number(id_customers),
                            id_voos: Number(id_voos)
                        }
                    });
                    if(!oneOrder) {
                        return res.status(404).send({ msgError: "Pedido não encontrado."});
                    }
                    return res.status(200).send(oneOrder);
                } catch (error) {
                    return res.status(500).send(error.message);
                }
            }

            static async createOrders(req, res) {
                const newOrder = req.body;
                try {
                    const verifyingCustomer = await database.Orders.findOne({
                        where: {
                            id_customers: Number(newOrder.id_customers)
                        }
                    })
                    if (verifyingCustomer) {
                        return res.status(400).send({msgError: "Cliente com pedido já realizado."});
                    }
                    const createdOrders = await database.Orders.create(newOrder);
                    return res
                    .status(200)
                    .send({ msgSucess: "Cadastrado com sucesso!", ...createdOrders});
                } catch (error) {}
            }

            static async editOrders(req, res) {
                    const { orderId } = req.params;
                    const newOrdersInfo = req.body;
                    try {
                      await database.Orders.update(newOrdersInfo, {
                        where: {
                          id: Number(orderId),
                        }
                    });

                        const updatedOrders = await database.Orders.findOne({
                          where: {
                            id: Number(orderId),
                          }
                        });
                        return res.status(200).send(updatedOrders);
                      } catch (error) {
                        return res
                          .status(500)
                          .send({ msg: "Erro ao atualizar o usuário!", error: error.message });
                      }
                    }

                    static async deleteOrders(req, res) {
                        const { orderId } = req.params;
                        try {
                          await database.Orders.destroy({
                            where: {
                              id: Number(orderId)
                            }
                          });
                          return res.status(200).send({ msg: "Deleted with success!" });
                        } catch (error) {
                          return res
                            .status(500)
                            .send({ msg: "Erro ao deletar o usuário!", error: error.message });
                        }
                      
            }
    }

        module.exports = CustomersController;