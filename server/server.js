const express = require("express");
const app = express();

const port = 5000;

//keep adding to this, in order to finalize storing  external API data in JSON models
app.get("/", (req, res) => {
  res.send("server test is good");
});

app.listen(port);
