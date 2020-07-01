app
  .route("/registration")
  .post((req, res) => {
    res.json({
      email: email,
      password: password,
    });
  })
  .put((req, res) => {
    // maybe add a new event...
  });
