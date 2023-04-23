const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//Getallproducts, getproductbyid, getproductbyname,addanewproduct
const app = express();
app.use(express.json());

const UserRouter = require("./routes/routes");

app.use("/ecom", UserRouter);

mongoose
  .connect(process.env.MONGOURl)
  .then(() => console.log("connected to database"));

app.listen(process.env.PORT, () => {
  console.log("My server started");
});
