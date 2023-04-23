const express = require("express");
const UserRouter = express.Router();

const {
  getProductsController,
  getProductsById,
  getProductsByname,
  postNewProducts,
} = require("../controllers/controllers");

//Getallproducts
UserRouter.get("/products", getProductsController);

//getproductbyid
UserRouter.get("/products/byId/:id", getProductsById);

//getproductbyname, pass the names without spaces in request url
UserRouter.get("/products/byName/:name", getProductsByname);

//Post request
UserRouter.post("/products/add", postNewProducts);

module.exports = UserRouter;
