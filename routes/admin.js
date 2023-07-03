const path = require("path");
const express = require("express");

const router = express.Router();

//filter only get request
// app.get
// app.post
// app.use -- all requests

router.get("/add-product", (req, resp, next) => {
  console.log("test");
  resp.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

router.post("/product", (req, resp, next) => {
  console.log(req.body);
  resp.redirect("/");
});

module.exports = router;
