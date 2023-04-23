const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  price: { type: String, required: true },
  category: { type: String, required: true },
});

const ProductModel = mongoose.model("Productdb", ProductSchema);

module.exports = ProductModel;
