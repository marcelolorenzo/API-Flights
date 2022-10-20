const {Router} = require("express");
const CustomersController = require("./controllers/CustomersController");
const route = Router();
const customersController = require("./controllers/CustomersController");

route.get("/customers", customersController.getAll);
route.get("/customer/:customerId", customersController.getOne);
route.post("/customer", customersController.createCustomer);
route.post("/orders", customersController.createOrders);
route.post("/restore-customer/:customerId", customersController.restoreCustomer);
route.put("/order/:orderId", customersController.editOrders);
route.put("/edit-customer/:customerId", customersController.editCustomer);
route.delete("/delete-order/:orderId", customersController.deleteOrders);
route.delete("/delete-customer/:customerId", customersController.deleteCustomer);





module.exports = route;