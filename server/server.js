const express = require("express");
const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("server test is good");
});

app.use("/login");

app
  .route("/login")
  .get((req, res) => {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
  })
  .post((req, res) => {
    res.json({});
  })
  .put((req, res) => {
    // maybe add a new event...
  });

app.listen(port);
