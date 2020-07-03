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
