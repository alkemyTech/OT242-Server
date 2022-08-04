const {Activity} = require('../models');
const { getOptions } = require('./getOptions');

/**
 * This function get the activities from the database based on the fields, values and attributes sent in the controller.
 * 
 * @param {array} fields - fields to select 
 * @param {array} values  - values to filter by
 * @param {array} attributes - attributes to include in the query
 * @returns {array} activities - array of activities
 */

const getActivities = async (fields = null, values = null, attributes = null) => {
  try {getOptions
    const options = (fields, values, attributes);
    const activities = await Activity.findAll(options);
    return activities;
  } catch (error) {
    throw(error);
  }
}

/**
 * This function get one activity from the database based on the id sent in controller.
 * @param {id} ActivityId 
 */

const getActivity = async (id) => {
  try {
    const activity = await Activity.findOne({
      where: {id}
    });
    return activity;
  } catch (error) {
    throw(error);
  }
}

/**
 * This function get one activity from the database based on the id sent in controller.
 * @param {instance} activity - activity instance to make the save 
 */

const updateActivity = async (activity) => {
  try {
    await activity.save();
    return activity;
  } catch (error) {
    throw(error);
  }
}

module.exports = {getActivities, getActivity, updateActivity} 