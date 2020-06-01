const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./assets/js/apiRoutes")(app);
require("./assets/js/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("Now listening on PORT " + PORT);
  });
  