const { entries } = require('../models');

export const find = async (req, res) => {
    const id = req.params.id
    try {
      const entry = await entries.findOne({
        where: { id }
      })
  
      return res.json(entry)
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  
  }