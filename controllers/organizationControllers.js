const { Organization } = require("../models");

const getOrganizationData = async (req, res) => {
  try {
    let query = await Organization.findAll({
      where: { id: req.params.id },
    });
    if (query != '') {
      res.status(200).json(query);
    } else {
      res.status(404).json({ message: "Organización inexistente." });
    }
  } catch (err) {
    res.status(400).json({ message: "Ocurrió un error inesperado." });
  }
};

module.exports = {
  getOrganizationData,
};
