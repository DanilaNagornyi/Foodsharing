const { Schema, model, pluralize } = require("mongoose");

pluralize(null);

const productSchema = new Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String, required: true },
  geolocation: { type: String, required: true },
  quantity: { type: Number, required: true },
  status: { type: Boolean, default: true },
  owner: { type: Schema.Types.ObjectId, ref: "users" },
});

module.exports = model("products", productSchema);
