const express = require("express");

const router = express.Router();

router.get("/", (req, resp, next) => {
  console.log("test123");
  resp.send("<html><p>Hello from express</p></html>");
});

module.exports = router;
