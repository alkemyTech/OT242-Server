const {Entry} = require('../models');
const { getOptions } = require('./getOptions');

/**
 * This function get the entries from the database based on the fields, values and attributes sent in the controller.
 * 
 * @param {array} fields - fields to select 
 * @param {array} values  - values to filter by
 * @param {array} attributes - attributes to include in the query
 * @returns {array} entries - array of entries
 */

const getEntries = async (fields = null, values = null, attributes = null) => {
  try {
    const options = getOptions(fields, values, attributes);
    const entries = await Entry.findAll(options);
    return entries;
  } catch (error) {
    throw(error);
  }
}

module.exports = {getEntries}