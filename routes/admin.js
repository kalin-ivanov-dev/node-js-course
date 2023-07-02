const exporess = require("express");

const router = exppress.Router();

//filter only get request
// app.get
// app.post
// app.use -- all requests

router.get("/add-product", (req, resp, next) => {
  console.log("test");
  resp.send("<html></html>");
});

router.post("/product", (req, resp, next) => {
  console.log(req.body);
  resp.redirect("/");
});

module.exports = router;
