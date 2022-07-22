const { Entry } = require("../models");

const getDetail = async (req, res) => {
  try {
    const detail = await Entry.findAll({
      where: { id: req.params.id },
    });
    if (detail != "") {
      res.json(detail[0]);
    } else {
      throw new Error;
    }
  } catch (err) {
    res.status(404).json({ message: "ERROR novedad inexistente" });
  }
};

module.exports = { getDetail };
