const User = require('../models/user');
// const _ = require('lodash');

const getOrCreateUser = async (telegramId, username) => {
  let user = await User.findOne({ telegram: username });
  if (user) {
    user.telegramid = telegramId;
    console.log(user, '=');
    return user
  }
};

module.exports = { getOrCreateUser }
