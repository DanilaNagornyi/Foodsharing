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
  photo: { type: String, default: 'https://image.freepik.com/vetores-gratis/ilustracao-engracada-de-desenhos-animados-vegetais-de-brocolis_11460-1232.jpg' },
  products: { type: Array, default: [] },
  password: String,
  telegramid: String,
  subscribes: { type: Array, default: [] },
});

module.exports = model('users', userSchema);
