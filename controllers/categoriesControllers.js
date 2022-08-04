const { Categories } = require("../models");

const getCategoriesByName = async (req, res) => {
  try {
    let query = await Categories.findAll({
      attributes: ["name"],
      order: [["name", "ASC"]],
    });
    return res.status(200).json(query);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

module.exports = { getCategoriesByName };
