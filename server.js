const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Load env vars
dotenv.config({ path: "./config.env" });

var corsOptions = {
  origin: "http://localhost:7071",
};

const app = express();

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require("./routes/product.routes")(app);
require("./routes/auth.routes")(app);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to BTMS application." });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
