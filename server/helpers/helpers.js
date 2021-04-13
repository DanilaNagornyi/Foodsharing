const User = require('../models/user');

const getOrCreateUser = async (telegramId, username) => {
  let user = await User.findOne({ telegram: username });
  if (user) {
    user.telegramid = telegramId;
    return user
  }
};

module.exports = { getOrCreateUser }
