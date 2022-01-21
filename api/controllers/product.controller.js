const Product = require("../models/product.model.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Product
  const product = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
  });

  // Save Product in the database
  Product.create(product, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product.",
      });
    else res.send(data);
  });
};

// Find a single product by Id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Product.findById(id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Product with id : ${id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Product with id " + id,
        });
      }
    } else res.send(data);
  });
};

// Find all products from the database (with condition)
exports.findAll = (req, res) => {
  const title = req.query.title;

  Product.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Products.",
      });
    else res.send(data);
  });
};

exports.update = (req, res) => {};

exports.deleteOne = (req, res) => {};

exports.deleteAll = (req, res) => {};
