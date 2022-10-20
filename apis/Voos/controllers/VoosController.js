const database = require("../../../dbConfig/models");
class VoosController {
  static async getAllVoos(req, res) {
    try {
      const allVoos = await database.Flights.findAll();
      return res.status(200).send(allVoos);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async getOneVoo(req, res) {
    const { id_voos } = req.params;
    try {
      const oneVoo = await database.Flights.findOne({
        where: {
          id: Number(id_voos)
        }
      });
      return res.status(200).send(oneVoo);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async createVoo(req, res) {
    const newVoo = req.body;
    try {
      const newCreatedVoo = await database.Flights.create(newVoo);
      return res.status(200).send(newCreatedVoo);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async editVoo(req, res) {
    const { id_voos } = req.params;
    const newVoosInfo = req.body;
    try {
      await database.Flights.update(newVoosInfo, {
        where: { id: Number(id_voos) }
      });
      const upatedVoos = await database.Flights.findOne({
        where: { id: Number(id_voos) }
      });
      return res.status(200).send(upatedVoos);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async deleteVoo(req, res) {
    const { id_voos } = req.params;
    try {
      await database.Flights.destroy({
        where: {
          id: Number(id_voos)
        }
      });
      return res
        .status(200)
        .send({ msg: `ID do voo: ${id_voos} foi deletado com sucesso!` });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = VoosController;
