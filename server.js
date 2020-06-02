const express = require("express");

const app = express();

const PORT = process.env.PORT || 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./apiRoutes")(app);
require("./htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("Now listening on PORT " + PORT);
  });
  