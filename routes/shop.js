const path = require("path");
const express = require("express");

const rootDir = require("../util/path");
const router = express.Router();

router.get("/", (req, resp, next) => {
  resp.sendFile(path.join(rootDir, "views", "shop.html"));
});

router.get("/users", (req, resp, next) => {
  resp.sendFile(path.join(rootDir, "views", "users.html"));
});

module.exports = router;
