const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});
router.get("/home", (req, res) => {
  res.send("  Home! no work anytype nothing!");
});

module.exports = router;
