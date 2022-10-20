const { response } = require("express");
const customersApi = require("../apis/Customers/routes");
const flightsApi = require("../apis/Voos/routes");

module.exports = (app) => {
    app.get("/", (req,res) => res.send("Entrou com sucesso."));
    app.use('/customers-api', customersApi);
    app.use('/flights-api', flightsApi);
    };

