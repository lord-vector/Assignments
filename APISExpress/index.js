const products = require("./product");
const express = require("express");
const fs = require("fs");

//Getallproducts, getproductbyid, getproductbyname,addanewproduct
const app = express();

//Getallproducts
app.get("/products", (req, res) => {
  res.send(products);
});

//getproductbyid
app.get("/products/byId/:id", (req, res) => {
  products.find((ele) => {
    if (ele.id.toString() === req.params.id) {
      res.send(ele);
    }
  });
});

//getproductbyname, pass the names without spaces in request url
app.get("/products/byName/:name", (req, res) => {
  products.find((ele) => {
    if (
      ele.title
        .split(" ")
        .join("")
        .toLowerCase()
        .includes(req.params.name.toLowerCase())
    ) {
      res.send(ele);
    }
  });
});

//Post request
app.post("/products/add", (req, res) => {
  //products.push({ id: products[products.length - 1].id + 1, ...req.body });
  const data = { id: products[products.length - 1].id + 1, ...req.body };
  res.send({ message: "following data insereted successfully", data });
});

// fs.readFile("./product.js");

app.listen(4000, () => {
  console.log("My server started");
});
