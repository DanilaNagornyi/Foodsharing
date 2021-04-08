const { Schema, model, pluralize } = require("mongoose");

pluralize(null);

const userSchema = new Schema({
  name: { type: String, required: true },
  surname: String,
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  telegram: String,
  city: { type: String, required: true },
  products: { type: Array, default: [] },
  password: { type: String, required: true },
});

module.exports = model("users", userSchema);
