const { Schema, model, pluralize } = require('mongoose');

pluralize(null);

const userSchema = new Schema({
  googleId: String,
  name: { type: String, required: true },
  surname: String,
  email: { type: String, required: true, unique: true },
  phone: String,
  telegram: String,
  city: String,
  photo: String,
  products: { type: Array, default: [] },
  password: String,
  telegramid: String,
  subscribes: { type: Array, default: [] },
});

module.exports = model('users', userSchema);
