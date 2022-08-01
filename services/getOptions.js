
/**
 * This function is used to get the option object for sequelize queries based on the request parameters.
 * 
 * @param {array} fields - fields to select 
 * @param {array} values  - values to filter by
 * @param {array} attributes - attributes to include in the query
 * @returns {object} - sequelize options object
 */
const getOptions = (fields = null, values = null, attributes = null) => {
  let options = {};
  if (attributes) options.attributes = attributes;
  if (fields && values) {
    if (fields.length === values.length) {
      options.where = {};
      fields.forEach((field, index) => {
        options.where[field] = values[index];
      });
    };
  }
  return options;
}

module.exports = {getOptions}