const { Entry } = require("../models");

const updateEntry = async (req, res) => {
  try {
    await Entry.update(req.body, {
      where: { id: req.params.id },
    });

    const updatedEntry = await Entry.findAll({ // busca el entry actualizado
      where: { id: req.params.id },
    });
    if (updatedEntry != "") {
      // Si el entry existe responde con el entry actualizado
      res.status(200).json({ message: "OK novedad actualizada", novedad: updatedEntry[0] });
    } else {
      throw new Error(); // si el entry no existe levanta un error
    }
  } catch (err) {
    res.status(404).json({ message: "ERROR novedad inexistente" });
  }
};

module.exports = { updateEntry };
