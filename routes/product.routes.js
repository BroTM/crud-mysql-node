module.exports = (app) => {
  const products = require("../api/controllers/product.controller.js");
  const router = require("express").Router();

  // Create a new Product
  router.post("/", products.create);

  // Retrieve all products
  router.get("/", products.findAll);

  // Retrieve a single Product with id
  router.get("/:id", products.findOne);

  // Update a Product with id
  router.put("/:id", products.update);

  // Delete a Product with id
  router.delete("/:id", products.deleteOne);

  // Delete all products
  router.delete("/", products.deleteAll);

  app.use("/api/products", router);
};
