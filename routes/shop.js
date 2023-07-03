const path = require("path");
const express = require("express");

const rootDir = require("../util/path");
const router = express.Router();
const adminData = require("./admin");

router.get("/", (req, resp, next) => {
  const products = adminData.products;
  console.log("shop.js", adminData.products);
  resp.render("shop", { prods: products, docTitle: "Shop" });
  // resp.sendFile(path.join(rootDir, "views", "shop.html"));
});

router.get("/users", (req, resp, next) => {
  resp.sendFile(path.join(rootDir, "views", "users.html"));
});

module.exports = router;
