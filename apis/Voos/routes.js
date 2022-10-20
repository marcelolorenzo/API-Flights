const {Router} = require("express");
const route = Router();
const VoosController = require("./controllers/VoosController");

route.get("/voos", VoosController.getAllVoos);
route.get("/voo/:id_voos", VoosController.getOneVoo);
route.post("/voo", VoosController.createVoo);
route.put("/voo/:id_voos", VoosController.editVoo);
route.delete("/voo/:id_voos", VoosController.deleteVoo);





route.get('/voos', (req, res) => 
    res.send ({msg: "Funcionando", serviceRoute: "Voos Service API"}))

module.exports = route;