const { Schema, model, pluralize } = require("mongoose");

pluralize(null);

const productSchema = new Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  photo: String,
  geolocation: { type: String, required: true },
  quantity: { type: Number, required: true },
  status: { type: Boolean, default: true },
  publishedBy: { type: String, default: new Date().toLocaleString() },
  validUntil: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: "users", required: true },
  coordinate: { type: String, required: true },
});

module.exports = model("products", productSchema);
