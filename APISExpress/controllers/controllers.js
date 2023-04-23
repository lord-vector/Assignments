const ProductModel = require("../models/schecma.productsDB");

const getProductsController = (req, res) => {
  ProductModel.find().then((data) => res.send(data));
};

const getProductsById = (req, res) => {
  ProductModel.find({ id: req.params.id }).then((data) => {
    if (data.length !== 0) {
      res.send(data[0]);
    } else {
      res.json({ message: `There is no data with this id - ${req.params.id}` });
    }
  });
};

const getProductsByname = (req, res) => {
  ProductModel.find({ title: req.params.name }).then((data) => {
    if (data.length !== 0) {
      res.send(data[0]);
    } else {
      res.json({
        message: `There is no data with this id - ${req.params.name}`,
      });
    }
  });
  //   products.find((ele) => {
  //     if (
  //       ele.title
  //         .split(" ")
  //         .join("")
  //         .toLowerCase()
  //         .includes(req.params.name.toLowerCase())
  //     ) {
  //       res.send(ele);
  //     }
  //   });
};

const postNewProducts = (req, res) => {
  const { id, title, price, category } = req.body;
  console.log(id, title, price, category);
  const productData = {
    id: id,
    title: title,
    price: price,
    category: category,
  };
  ProductModel.find({ id }).then((data) => {
    if (data.length === 0) {
      // method to store data in Mongo DB
      ProductModel(productData)
        .save()
        .then((data) =>
          res.send({ message: "following data insereted successfully", data })
        )
        .catch((err) =>
          res.send({ message: "data is not insereted due to", err })
        );
    } else {
      res.json({ message: `id with ${id} already exist` });
    }
  });
};

module.exports = {
  getProductsController,
  getProductsById,
  getProductsByname,
  postNewProducts,
};
