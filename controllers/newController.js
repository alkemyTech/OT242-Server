const { entry } = require('../models');

const find = async (req, res) => {
    const id = req.params.id
    try {
      const entries = await entry.findOne({
        where: { id }
      })
      return res.json(entries)
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  }
  module.exports = {
    find
}