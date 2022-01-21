module.exports = (app) => {
  const router = require("express").Router();
  const jwt = require("jsonwebtoken");

  router.get("/login", (req, res) => {
    res.send({ message: "Welcome to api" });
  });

  router.post("/login", (req, res) => {
    const user = {
      id: 1,
      name: "BTMS",
      email: "btms@gmail.com",
    };
    // jwt.sign({ user: user }, "screctkey", (err, token) => {
    //   res.json({ token: token });
    // });
    jwt.sign({ user }, "screctkey", (err, token) => {
      res.json({
        token,
      });
    });
  });
  app.use("/auth", router);
};
