const { Schema, model, pluralize } = require("mongoose");

pluralize(null);

const categoriesSchema = new Schema({
  name: { type: String, required: true },
  productsList: [{ type: Schema.Types.ObjectId, ref: "products" }],
  subscribers: [{ type: Schema.Types.ObjectId, ref: "users" }],
});

module.exports = model("categories", categoriesSchema);
